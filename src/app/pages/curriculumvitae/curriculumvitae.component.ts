import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculumvitae',
  templateUrl: './curriculumvitae.component.html',
  styleUrls: ['./curriculumvitae.component.css', '../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css']
})
export class CurriculumvitaeComponent implements OnInit {

  imagesUrl = ['../../../assets/images/personaldata/foto_1.jpg', '../../../assets/images/personaldata/foto_2.jpg', '../../../assets/images/personaldata/foto_3.jpg'];
  index = 0;
  div;

  constructor() { 
    this.div = document.getElementsByClassName("fotos") as HTMLCollectionOf<HTMLElement>;
  }

  ngOnInit(): void {
    var acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "none") {
          panel.style.display = "block";
        } else {
          panel.style.display = "none";
        }
      });
    }
  }

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
