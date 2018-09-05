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
  
  constructor( private contactService: ContactService, private route: ActivatedRoute, private router: Router) {

    this.editableContactObj = {
      name: "test"
    };

    this.route.params.subscribe( (params) => {    
      this.contactID = Number(params.id);
      console.log(this.contactID);
    });
  }

  ngOnInit() {
    //send a call to get one specific contact loaded
    this.getContactDetails(this.contactID)
  }

  isEmptyObject(obj) {
    console.log(obj);
    return (obj && (Object.keys(obj).length === 0));
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
    this.editableContactObj ={
      id: this.contactID,
      name: this.contactObj['name'],
      phone: this.contactObj['phone'],
      email: this.contactObj['email'],
      company: this.contactObj['company']['name'],
    } 
  }

  //submit 
  //1) send the updateable data to b/e
  //2) get the resp -- 
  // 3.1) close the modal and refresh the component upon success
  // 3.2) if error show in modal itself and don't close

  updateContact(){
    console.log("Inside update ");
    this.contactService.update()
                      .subscribe((response: any) => { //receive the data from service
                            console.log(response);
                            // DOM will be mutated automatically
                      });
  }
}
