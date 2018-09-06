import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  contactDetails = {
    name: "",
    email: "",
    phone: "",
    company: {
      name: ""
    }
  };

  isSuccess: boolean;

  //dep inj the service
  constructor( private contactService: ContactService, private router: Router ) { 

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
                              setTimeout(()=>{
                                this.router.navigate(['contacts']);                            
                              }, 3000);
                            }
                        );

    //2) receive the response from services
  }

  ngOnDestroy(){
    console.log("Testing destroy");
    
  }

}
