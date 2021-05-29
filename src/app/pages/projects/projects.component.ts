import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { 
    document.getElementById("btn_visiting").style.backgroundColor = "#ffffff";
    document.getElementById("btn_curriculum").style.backgroundColor = "#ffffff";
    document.getElementById("btn_projects").style.backgroundColor = "#f1f1f1";
  }

  ngOnInit(): void {
  }

}
