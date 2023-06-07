import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { RequestsComponent } from './components/requests/requests.component';
// import { ChatsComponent } from './components/chats/chats.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';




@NgModule({
  declarations: [
   
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LandingpageComponent,
    HomepageComponent,
    FooterComponent,
    ProductsComponent,
    RequestsComponent,
    NavbarComponent
    // ChatsComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // AngularFireModule.initializeApp,
    // AngularFirestoreModule
    ],
    
    

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
