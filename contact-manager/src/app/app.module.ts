import { BrowserModule } from '@angular/platform-browser';  //angular imports 
import { NgModule } from '@angular/core';  
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';//importing app Component 
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { AboutComponent } from './components/about/about.component';
import { GetintouchComponent } from './components/getintouch/getintouch.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component'; 


//creating routes with path and component
const APP_ROUTES: Routes = [
  { path: '', component: ConceptsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/:id', component: ContactDetailComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'get-in-touch', component: GetintouchComponent }
];

// Decorator (function) expects an object to be passed as metadata 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ConceptsComponent,
    ContactsComponent,
    AddContactComponent,
    AboutComponent,
    GetintouchComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),     //registering the routes,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]   // bootstrap AppModule with a Component
})
export class AppModule { }
