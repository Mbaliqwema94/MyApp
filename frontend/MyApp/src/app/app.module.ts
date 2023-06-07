import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { RequestsComponent } from './components/requests/requests.component';
// import { ChatsComponent } from './components/chats/chats.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';




@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    RegisterComponent,
    LoginComponent,
    LandingpageComponent,
    HomepageComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    RequestsComponent,
    // ChatsComponent,
    AboutUsComponent,
    

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
