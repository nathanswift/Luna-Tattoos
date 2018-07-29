import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  images = ['assets/bones.jpg', 'assets/frieda.jpg', 'assets/peace.jpg', 'assets/feedingdeers.jpg', 'assets/dino.jpg'];
  currentImage = 0;

  constructor() {
    setInterval(() => {
      this.currentImage++;
      if (this.currentImage === this.images.length) this.currentImage = 0;
      const elem = document.getElementById('portfolio-image');
      if (elem) elem.setAttribute('src', this.images[this.currentImage]);
    }, 2000);
  }

  ngOnInit() {
  }

}
