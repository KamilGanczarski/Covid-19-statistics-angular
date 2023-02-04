import { Component, OnInit } from '@angular/core';
import { Covid19StatsService } from '../../services/covid19-stats.service';
import { Globals } from '../../Covid19-stats';

@Component({
  selector: 'app-show-globals',
  templateUrl: './show-globals.component.html',
  styleUrls: ['./show-globals.component.scss']
})
export class ShowGlobalsComponent implements OnInit {
  globals!: Globals;

  constructor(private covid19StatsService: Covid19StatsService) {}

  ngOnInit(): void {
    this.covid19StatsService.getStats().subscribe((stats) => {
      this.globals = stats.Global;
    });
  }

}
