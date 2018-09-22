import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
    const links = document.getElementsByClassName('page-nav');
    for (let x = 0; x < links.length; x++) {
      const link = links[x];
      link.addEventListener('click', function () {
        const id = this.getAttribute('data-section'),
          elem = document.getElementById(id);
        window.scrollTo(0, elem.offsetTop);
      });
    }
  }
}
