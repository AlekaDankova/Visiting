import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitingcard',
  templateUrl: './visitingcard.component.html',
  styleUrls: ['./visitingcard.component.css']
})
export class VisitingcardComponent implements OnInit {

  constructor() {
    document.getElementById("btn_visiting").style.backgroundColor = "#f1f1f1";
    document.getElementById("btn_curriculum").style.backgroundColor = "#ffffff";
    document.getElementById("btn_projects").style.backgroundColor = "#ffffff";
  }

  ngOnInit(): void {
  }

}
