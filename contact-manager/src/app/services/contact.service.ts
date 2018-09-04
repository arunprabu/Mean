import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private httpService: Http ) { 

  }

  //1. CREATE ACTION
  //receive data from comp
  createContact(contactData){
    console.log(contactData);

    //send it to rest api 
    return this.httpService.post("https://jsonplaceholder.typicode.com/users", contactData)
                          .pipe(map(response => {    //receive the resp from rest api 
                              console.log(response);
                              return response.json();   //sending it back to component thru service
                            }
                          ));
    
  }

  //2. READ ACTION
  getContacts(){
    // receive the req from comp.
    return this.httpService.get("https://jsonplaceholder.typicode.com/users")
                            .pipe(map(response => {    //receive the resp from rest api 
                              console.log(response);
                              return response.json();   //sending it back to component thru service
                            }
                          ));
    // send it to rest API  
    // get response from rest api 
    // send it back to the component
  }

  getContactDetails(id){
    // receive the req from comp.
    return this.httpService.get("https://jsonplaceholder.typicode.com/users/1")
                            .pipe(map(response => {    //receive the resp from rest api 
                              console.log(response);
                              return response.json();   //sending it back to component thru service
                            }
                          ));
    // send it to rest API  
    // get response from rest api 
    // send it back to the component
  }

  
  


}
