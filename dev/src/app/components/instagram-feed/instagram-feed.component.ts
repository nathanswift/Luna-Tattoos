import { Component, OnInit } from '@angular/core';
import * as Instafeed from 'instafeed';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.css']
})
export class InstagramFeedComponent implements OnInit {

  constructor() {
    new Instafeed({
      accessToken: '50928748.1677ed0.6b1d998d3fef463988c8af20c40c93bb',
      onSuccess: (msg) => {
        var elems = document.querySelectorAll('div#instafeed img');
        for (var x = 0; x < elems.length; x++) {
          var elem: any = elems[x];
          elem.style.width = '100%';
          elem.style.height = 'auto';
        }
      },
      onError: (msg) => {
        console.log(msg);
      }
    }).run();
  }

  ngOnInit() {
  }

}
