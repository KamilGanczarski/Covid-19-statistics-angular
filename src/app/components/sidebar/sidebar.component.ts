import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

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
