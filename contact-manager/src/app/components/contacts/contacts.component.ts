import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactList: Object[];

  //dep injection
  constructor(private router: Router, private contactService: ContactService) {
    console.log("1. Inside Constructor")
  }

  ngOnInit() {
    console.log("2. Inside ngOnInit")
    this.getAllContacts();
  }

  gotoCreateContact(){
    //send the user to /add page 
    this.router.navigate(['add']);
    //console.log("Test");
  }

  getAllContacts(){
    //send the req to service 
    this.contactService.getContacts()
                        .subscribe((loadedContactInfo: any) => { //receive the data from service
                              console.log(loadedContactInfo);
                              this.contactList = loadedContactInfo;
                              // DOM will be mutated automatically
                          }
                        );
  }
  
  
}
