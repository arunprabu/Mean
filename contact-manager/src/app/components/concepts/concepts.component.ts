import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `.red{
      color: red;
      font-size: 32px;
    }
    
    .green{
      color: green;
    }
    
    .borderDotted{
      border: dotted 1px #000000;
    
    }`
  ]
})
export class ConceptsComponent implements OnInit {

  //variables - data 
  link1 = "Angular blog";
  link2 = "events";
  link3 = "tutorials";

  //structural directive example
  isLoggedIn: boolean = false;

  age;

  today: number = Date.now();
  
  listOfUsers = [{
    "id": "#1",
    "first_name": "Maureene",
    "last_name": "Oran",
    "email": "moran0@php.net"
  }, {
    "id": "#2",
    "first_name": "Benito",
    "last_name": "MacColl",
    "email": "bmaccoll1@columbia.edu"
  }, {
    "id": "#3",
    "first_name": "Shanan",
    "last_name": "Ford",
    "email": "sford2@lulu.com"
  }, {
    "id": "#4",
    "first_name": "Ginelle",
    "last_name": "Mager",
    "email": "gmager3@psu.edu"
  }, {
    "id": "#5",
    "first_name": "Harvey",
    "last_name": "Amort",
    "email": "hamort4@bbb.org"
  }];

  loremIpsum: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero temporibus soluta laboriosam consequuntur impedit nam incidunt blanditiis tempora repellat officiis eligendi aliquam, nisi consectetur praesentium omnis, eaque et natus quasi?";

  constructor() { 
    console.log(this.today);
  }

  ngOnInit() {
  }

  //Method 
  add(a, b ){  //args 
    return a + b;
  }


  isAuthenticated(){
    return true;
  }

  getFontSize(){
    return '32px';
  }

  onBtnClick(e) {
    console.log("Clicked -- event emitted");
    console.log(e);
  }
}
