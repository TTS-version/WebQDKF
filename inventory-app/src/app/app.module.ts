import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Student } from './student.component';
import { StudentList } from './student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Student,
    StudentList
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
