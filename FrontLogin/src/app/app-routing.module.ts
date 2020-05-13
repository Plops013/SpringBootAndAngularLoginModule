import { HomeComponent } from './home/home.component';
import { ListComponent } from './person/list/list.component';
import { SignupComponent } from './person/signup/signup.component';
import { AuthGuardService } from './shared/service/auth-guard.service';
import { LoginComponent } from './person/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'person/signup', component: SignupComponent },
  { path: 'person/list', component: ListComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
