import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contactObj: {};
  
  constructor( private contactService: ContactService) { }

  ngOnInit() {
    //send a call to get one specific contact loaded
    this.getContactDetails()
  }


  getContactDetails(){
    //send the req to service 
    this.contactService.getContactDetails(1)
                        .subscribe((loadedContactInfo: any) => { //receive the data from service
                            console.log(loadedContactInfo);
                            this.contactObj = loadedContactInfo;
                        }
                      );
    //receive the data from service
  }

  

}
