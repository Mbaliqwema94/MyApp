import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { RequestsComponent } from './components/requests/requests.component';
import { ProductServiceService } from './product.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'Register', component: RegisterComponent},
  { path: 'Login', component: LoginComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }// Redirect to home for any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
