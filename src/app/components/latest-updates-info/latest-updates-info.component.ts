import { Component, OnInit, Input } from '@angular/core';
import {
  faPlus,
  faAngleUp,
  faAngleDown,
  faMinus
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-latest-updates-info',
  templateUrl: './latest-updates-info.component.html',
  styleUrls: ['./latest-updates-info.component.scss']
})
export class LatestUpdatesInfoComponent implements OnInit {
  @Input() title?: string;
  @Input() info: number = 0;
  @Input() nextInfo: number = 0;
  @Input() i: number = 0;
  @Input() length: number = 0;

  // Icons
  faPlus = faPlus;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faMinus = faMinus;

  constructor() { }

  ngOnInit(): void {
  }

}
