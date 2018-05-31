import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormDataComponent } from './form-data/form-data.component';
import { RegisterComponent } from './register/register.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AddMoreComponent } from './add-more/add-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormDataComponent,
    RegisterComponent,
    EditFormComponent,
    AddMoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
