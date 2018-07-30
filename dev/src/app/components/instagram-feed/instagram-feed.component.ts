import { Component, OnInit } from '@angular/core';
import { instagram } from '../../../environments/instagram';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.css']
})
export class InstagramFeedComponent implements OnInit {

  constructor() {
    console.log(instagram);
  }

  ngOnInit() {
  }

}
