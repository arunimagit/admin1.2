import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { StudentserviceService } from './studentservice.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    NewstudentComponent,
    UpdatestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],


  providers: [StudentserviceService,
    {provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
