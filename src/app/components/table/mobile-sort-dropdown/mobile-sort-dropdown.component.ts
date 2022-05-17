import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Country } from '../../../Covid19-stats';

@Component({
  selector: 'app-mobile-sort-dropdown',
  templateUrl: './mobile-sort-dropdown.component.html',
  styleUrls: ['./mobile-sort-dropdown.component.scss']
})
export class MobileSortDropdownComponent implements OnInit {
  @Input() lastSort!: string;
  @Input() sortOptions!: Array<keyof Country>;
  @Output() onSortStats: EventEmitter<keyof Country> = new EventEmitter();

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  constructor() {}

  ngOnInit(): void {}

  onSort(column: keyof Country) {
    this.onSortStats.emit(column);
  }
}
