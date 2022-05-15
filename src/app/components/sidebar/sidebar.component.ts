import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faCoffee = faCoffee;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    document.querySelectorAll(".Sidebar")[0].classList.toggle("toggled");
  }
}
