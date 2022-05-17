import { Component, OnInit } from '@angular/core';
import { Covid19StatsService } from '../../../services/covid19-stats.service';
import { Globals, Country } from '../../../Covid19-stats';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  globals?: Globals;
  countries!: Country[];
  countriesFiltered!: Country[];
  countriesShow!: Country[];

  // Sort
  currentSort: keyof Country = 'ID';
  lastSort: string = 'ID';

  // Pagination
  currPage: number = 0;
  paginationInput: string = '';
  rowsPerPage: number = 10;
  totalPages: number = 0;

  sortOptions: Array<keyof Country> = [
    'Country',
    'NewConfirmed',
    'NewDeaths',
    'NewRecovered',
    'TotalConfirmed',
    'TotalDeaths',
    'TotalRecovered'
  ];

  // Icons
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  constructor(private covid19StatsService: Covid19StatsService) {}

  ngOnInit(): void {
    this.covid19StatsService.getStats().subscribe((stats) => {
      this.countries = stats.Countries;
      this.countries.forEach(country => {
        country.isCollapsed = true;
      })
      this.countriesFiltered = this.countries;
      this.globals = stats.Global;
      this.totalPages = Math.ceil(this.countries.length / this.rowsPerPage);
      this.sortStats("ID");
    });
  }

  sortStatsByCurrentSort() {
    this.sortStats(this.currentSort);
  }

  sortStats(column: keyof Country) {
    this.currentSort = column;
    let ascending = this.lastSort === column;
    this.lastSort = ascending ? `-${column}` : column;
    ascending = !ascending;

    this.countriesShow = this.covid19StatsService.sortData(
      this.countriesFiltered,
      column,
      ascending
    );

    this.currPage = 0;
    this.changePageScope(this.rowsPerPage);
  }

  changePageScope(rowsPerPageNew: number): void {
    // Check wrong rows count
    if (rowsPerPageNew < 0 || rowsPerPageNew > this.countries.length)
      return;

    this.rowsPerPage = rowsPerPageNew;
    this.totalPages = Math.ceil(this.countries.length / this.rowsPerPage);
    this.countriesShow = this.countriesFiltered.slice(
      this.currPage * this.rowsPerPage,
      (this.currPage + 1) * this.rowsPerPage
    );
  }

  changePage(newPage: number): void {
    this.currPage = newPage;
    this.countriesShow = this.countriesFiltered.slice(
      this.currPage * this.rowsPerPage,
      (this.currPage + 1) * this.rowsPerPage
    );
  }

  changeSearch(newSearchValue: string) {
    if (newSearchValue === '') {
      this.countriesFiltered = this.countries;
    } else {
      newSearchValue = newSearchValue.toLowerCase();
  
      this.countriesFiltered = this.countries
        .filter(country => country.Country.toLowerCase().includes(newSearchValue));
    }

    this.totalPages = Math.ceil(this.countriesFiltered.length / this.rowsPerPage);
    this.currPage = 0;
    this.changePageScope(this.rowsPerPage);
    this.sortStats(this.currentSort);
  }

  collapseToggle(id: string) {
    this.countriesShow.forEach(country => {
      if (country.ID === id) {
        country.isCollapsed = !country.isCollapsed;
        return;
      }
    });
  }
}
