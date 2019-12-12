import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favlinks: string[] = ['https://sunflowerclinicmassage.com', 'https://www.dmsguild.com']
  constructor() { }

  ngOnInit() {
  }

}
