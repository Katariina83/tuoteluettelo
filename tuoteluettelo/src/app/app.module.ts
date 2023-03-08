import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PhoneDetailsComponent } from './phonedetails/phonedetails.component';
import { PhoneListComponent } from './phonelist/phonelist.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    PhoneDetailsComponent,
    PhoneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }