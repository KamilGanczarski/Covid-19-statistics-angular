import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Country } from '../../../Covid19-stats';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss']
})
export class SortButtonComponent implements OnInit {
  @Input() column!: keyof Country;
  @Input() lastSort!: string;
  @Output() onSortStats: EventEmitter<keyof Country> = new EventEmitter();

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  constructor() {}

  ngOnInit(): void {}

  onSort(column: keyof Country) {
    this.onSortStats.emit(column);
  }
}
