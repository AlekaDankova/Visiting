import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitingcard',
  templateUrl: './visitingcard.component.html',
  styleUrls: ['./visitingcard.component.css', '../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css']
})
export class VisitingcardComponent implements OnInit {

  imagesUrl = ['../../../assets/images/personaldata/foto_1.jpg', '../../../assets/images/personaldata/foto_2.jpg', '../../../assets/images/personaldata/foto_3.jpg'];
  index = 0;
  div;

  constructor() {
    this.div = document.getElementsByClassName("fotos") as HTMLCollectionOf<HTMLElement>;
  }

  ngOnInit(): void { }

  previous() {
    if (this.index == 0) this.index = (this.imagesUrl.length - 1);
    else this.index--;
    this.div[0].style.backgroundImage = "url('" + this.imagesUrl[this.index] + "')";
  }

  next() {
    if (this.index == (this.imagesUrl.length - 1)) this.index = 0;
    else this.index++;
    this.div[0].style.backgroundImage = "url('" + this.imagesUrl[this.index] + "')";
  }

}
