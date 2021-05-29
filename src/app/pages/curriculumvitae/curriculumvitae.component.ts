import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculumvitae',
  templateUrl: './curriculumvitae.component.html',
  styleUrls: ['./curriculumvitae.component.css']
})
export class CurriculumvitaeComponent implements OnInit {

  constructor() { 
    document.getElementById("btn_visiting").style.backgroundColor = "#ffffff";
    document.getElementById("btn_curriculum").style.backgroundColor = "#f1f1f1";
    document.getElementById("btn_projects").style.backgroundColor = "#ffffff";
  }

  ngOnInit(): void {
  }

}
