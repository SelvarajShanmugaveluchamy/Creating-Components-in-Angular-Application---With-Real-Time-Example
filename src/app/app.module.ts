import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { NonEmployeeComponent } from './non-employee/non-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NonEmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
