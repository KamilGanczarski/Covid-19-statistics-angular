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

  ngOnInit(): void {
    const btns = document.querySelectorAll('.btn-toggle-sidebar');
    for (let i = 0; i < btns.length; i++) {
      const DOMelement = btns[i];
      DOMelement.addEventListener('click', () => {
        document.querySelectorAll(".Sidebar")[0].classList.toggle("toggled");
      })
    }
  }
}
