import { Component } from '@angular/core';

//@component decorator (function) expects params to be metadata in the form of object
@Component({
  selector: 'app-root',   //tag, class, attribute
  templateUrl: './app.component.html',    
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
