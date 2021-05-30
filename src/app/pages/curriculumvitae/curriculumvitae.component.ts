import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculumvitae',
  templateUrl: './curriculumvitae.component.html',
  styleUrls: ['./curriculumvitae.component.css']
})
export class CurriculumvitaeComponent implements OnInit {

  constructor() { 
    //document.getElementById("btn_visiting").style.backgroundColor = "#ffffff";
    //document.getElementById("btn_curriculum").style.backgroundColor = "#f1f1f1";
    //document.getElementById("btn_projects").style.backgroundColor = "#ffffff";
  }

  ngOnInit(): void {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

}
