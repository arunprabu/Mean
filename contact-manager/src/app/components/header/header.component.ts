import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Contact Manager App';    //implicit typing

  constructor() {
    this.updateTitle()
  }

  ngOnInit() {

  }

  updateTitle(){
    this.title = this.title+ " v 1.0";
  }

}
