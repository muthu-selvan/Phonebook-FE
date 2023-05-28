import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { AddPhonebookComponent } from './add-phonebook/add-phonebook.component';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    PhonebookComponent,
    AddPhonebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
