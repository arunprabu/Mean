import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
declare var jquery:any;
declare var $ :any;

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contactObj: {};
  editableContactObj: {};

  contactID: number;
  isDeleted: boolean;
  isUpdated:boolean;

  constructor( private contactService: ContactService, private route: ActivatedRoute, private router: Router) {
    console.log("Inside Constructor");
    this.editableContactObj = {
      name: "test"
    };

    this.route.params.subscribe( (params) => {    
      this.contactID = Number(params.id);
      console.log(this.contactID);
    });
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
    //send a call to get one specific contact loaded
    this.getContactDetails(this.contactID)
  }

  getContactDetails(id){
    //send the req to service 
    this.contactService.getContactDetails(id)
                        .subscribe((loadedContactInfo: any) => { //receive the data from service
                            console.log(loadedContactInfo);
                            this.contactObj = loadedContactInfo;
                        }
                      );
    //receive the data from service
  }

  contactDeleteHandler(){
    console.log("Delete");
    this.contactService.deleteContact(this.contactID)
                        .subscribe((status: any) => { //receive the data from service
                            console.log(status);
                            this.isDeleted = true;

                            setTimeout(()=>{
                              this.gotoAllContacts();
                            }, 3000);
                        });
  }
  
  gotoAllContacts(){
    //send the user to /add page 
    this.router.navigate(['contacts']);
    //console.log("Test");
  }

  //edit
  openEditModal(){
    $("#editContactModal").modal('show');
    //copy of that original obj
    //show it in inputs of modal

    // this.editableContactObj ={
    //   id: this.contactID,
    //   name: this.contactObj['name'],
    //   phone: this.contactObj['phone'],
    //   email: this.contactObj['email'],
    // } 


    // es6 way of duplicating obj 
    this.editableContactObj = JSON.parse(JSON.stringify(this.contactObj));
    console.log(this.editableContactObj);
  }

  updateContact(){
    console.log("Inside update ");
    //1) send the updateable data to b/e
    this.contactService.update(this.editableContactObj)
                      .subscribe((response: any) => { //receive the data from service
                            console.log(response);
                            // DOM will be mutated automatically
                            this.isUpdated = true;

                            setTimeout(() => {
                              $("#editContactModal").modal('hide');
                            }, 3000);
                      });
  }
}
