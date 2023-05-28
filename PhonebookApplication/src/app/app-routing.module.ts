import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { RouteGuardService } from './services/route-guard.service';
import { AddPhonebookComponent } from './add-phonebook/add-phonebook.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},

  {path: 'phonebook', component: PhonebookComponent, canActivate: [RouteGuardService]},
  {path: 'add-phonebook', component: AddPhonebookComponent, canActivate: [RouteGuardService]},
  {path: 'edit-phonebook/:id', component: AddPhonebookComponent},

  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},

  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
