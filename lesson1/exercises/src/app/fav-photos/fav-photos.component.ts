import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo Gallery';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i.ytimg.com/vi/Yj7ja6BANLM/maxresdefault.jpg';
  image3 = 'https://i.pinimg.com/originals/b3/0f/0c/b30f0c37df8d2c3a69fe777f4386079e.jpg';

  constructor() { }

  ngOnInit() {
  }

}