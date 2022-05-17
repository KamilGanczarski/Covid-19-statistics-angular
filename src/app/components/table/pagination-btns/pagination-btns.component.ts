import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination-btns',
  templateUrl: './pagination-btns.component.html',
  styleUrls: ['./pagination-btns.component.scss']
})
export class PaginationBtnsComponent implements OnInit {
  @Input() currPage!: number;
  @Input() totalPages!: number;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter();
  paginationBtns: number[] = [];

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  paginationInput?: number;

  constructor() { }

  ngOnInit(): void {
    this.createPaginationBtns();
  }

  createPaginationBtns() {
    this.paginationBtns = [...Array(this.totalPages).keys()];
  }

  onSubmitHandler() {
    if (this.paginationInput) {
      this.changePage(this.paginationInput - 1);
    }
  }

  changePage(newPage: number) {
    // Check wrong table page
    if (newPage < 0 || newPage > this.totalPages) {
      this.paginationInput = undefined;
      return;
    }

    if (newPage > 3 && newPage < this.totalPages - 4) {
      this.paginationInput = newPage + 1;
    } else {
      this.paginationInput = undefined;
    }

    this.onChangePage.emit(newPage);
  }

  ngOnChanges() {
    this.createPaginationBtns();
  }

  changeValue() {
    if (this.paginationInput) {
      this.changePage(this.paginationInput - 1);
    }
  }
}
