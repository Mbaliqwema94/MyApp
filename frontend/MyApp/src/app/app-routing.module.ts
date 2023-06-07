import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { RequestsComponent } from './components/requests/requests.component';
import { ProductServiceService } from './product.service';



const routes: Routes = [
  { path: '', component: HomepageComponent ,pathMatch: 'full'},
  { path: 'Register', component: RegisterComponent},
  { path: 'Login', component: LoginComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },// Redirect to home for any other route
  { path: 'app-landingpage',component: LandingpageComponent },
  { path: 'productServiceService', component: ProductServiceService},
  { path: 'app-requests', component: RequestsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
