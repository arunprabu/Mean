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

  //1. CREATE 
  //receive data from comp
  createContact(contactData){
    console.log(contactData);

    //send it to rest api 
    return this.httpService.post("http://localhost:3000/api/contacts/", contactData)
                    .pipe(map(response => {    //receive the resp from rest api 
                        console.log(response);
                        return response.json();   //sending it back to component thru service
                      }
                    ));
                          
    
  }

  //2. READ 
  getContacts(){
    // receive the req from comp.
    return this.httpService.get("http://localhost:3000/api/contacts/")
                            .pipe(map(response => {    //receive the resp from rest api 
                                console.log(response);
                                return response.json();   //sending it back to component thru service
                              }
                            ));
    // send it to rest API  
    // get response from rest api 
    // send it back to the component
  }

  //3. READ contact details of one user
  getContactDetails(contactId){
    // receive the req from comp.
    return this.httpService.get("http://localhost:3000/api/contacts/"+ contactId)
                            .pipe(map(response => {    //receive the resp from rest api 
                              console.log(response);
                              return response.json();   //sending it back to component thru service
                            }
                          ));
    // send it to rest API  
    // get response from rest api 
    // send it back to the component
  }

  //4. UPDATE 
  update(newObj){
    return this.httpService.put("http://localhost:3000/api/contacts/"+ newObj.contactId, newObj )
                            .pipe(map(response => {    //receive the resp from rest api 
                                console.log(response);
                                return response.json();   //sending it back to component thru service
                              }
                            ));
  }

  //5. DELETE 
  deleteContact(contactId){
    console.log(contactId);
    return this.httpService.delete("http://localhost:3000/api/contacts/"+contactId)
                      .pipe(map(response => {    //receive the resp from rest api 
                        console.log(response);
                        return response.json();   //sending it back to component thru service
                      }
                    ));
  }


}
