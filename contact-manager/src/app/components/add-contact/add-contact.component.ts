import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  contactDetails = {
    company: {}
  };

  isSuccess: boolean;

  //dep inj the service
  constructor( private contactService: ContactService ) { 

  }

  ngOnInit() {
  }

  onCreateContactHandler(  ){
    console.log(this.contactDetails);
    //1) send the data to services
    this.contactService.createContact(this.contactDetails)
                        .subscribe(    //receive the data from service
                            (savedContactInfo: any) => {
                              if(savedContactInfo && savedContactInfo.id){
                                this.isSuccess = true;
                              }else{
                                this.isSuccess = false;
                              }
                              console.log(savedContactInfo);
                            }
                        );

    //2) receive the response from services
  }

  testingClick(){
    alert("testing")
  }
}
