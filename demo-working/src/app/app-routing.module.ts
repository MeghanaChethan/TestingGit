import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupDashboardComponent } from './signup-dashboard/signup-dashboard.component';
import { UserComponent } from './user/user.component';




const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  // {path : '', component : LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path:'login-dashboard', component:LoginDashboardComponent},
  {path:'signup-dashboard', component:SignupDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
