import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scope-btn',
  templateUrl: './scope-btn.component.html',
  styleUrls: ['./scope-btn.component.scss']
})
export class ScopeBtnComponent implements OnInit {
  @Input() rowsPerPage!: number;
  tableRowsLimitBtn: number[] = [ 5, 10, 15, 20, 30, 40, 50, 100 ];
  faAngleDown = faAngleDown;
  @Output() onChangePageScope: EventEmitter<number> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  changePageScope(limitBtn: number) {
    this.onChangePageScope.emit(limitBtn);
  }
}
