import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../../Covid19-stats';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  @Input() country!: Country;

  constructor() {}

  ngOnInit(): void {}
}
