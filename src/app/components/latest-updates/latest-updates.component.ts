import { Component, OnInit } from '@angular/core';
import { Covid19StatsService } from '../../services/covid19-stats.service';
import { Globals } from '../../Covid19-stats';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-latest-updates',
  templateUrl: './latest-updates.component.html',
  styleUrls: ['./latest-updates.component.scss']
})
export class LatestUpdatesComponent implements OnInit {
  latestStats: Globals[] = [];
  howMany: number = 0;

  // Icons
  faPlus = faPlus;

  constructor(private covid19StatsService: Covid19StatsService) {}

  ngOnInit(): void {
    this.fetchMoreStats();
  }

  fetchMoreStats() {
    this.howMany += 5;
    this.covid19StatsService.getLatestNews(this.howMany).subscribe((stats) => {
      this.deployResults(stats);
    });
  }

  deployResults(stats: Globals[]) {
    stats = stats.sort((a: Globals, b: Globals) => a.Date < b.Date ? 1 : -1);
    stats.forEach(element => {
      // If contain, don't add to array
      if (this.latestStats.some(elem => elem.Date === element.Date)) {
        return;
      }

      var t = new Date(element.Date);
      const day = t.toLocaleString('default', { day: 'numeric' });
      const month = t.toLocaleString('default', { month: 'short' });
      const year = t.getFullYear();
      element.dateFrontent = `${day} ${month} ${year}`;
      this.latestStats.push(element);
    });
  }
}
