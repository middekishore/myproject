import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { StudentcreateComponent } from './component/studentcreate/studentcreate.component';
import { StudenteditComponent } from './component/studentedit/studentedit.component';
import { StudentlistComponent } from './component/studentlist/studentlist.component';
import { StudentService } from './service/student.service';
import { SearchPipe } from './pipes/search.pipe';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    StudentcreateComponent,
    StudenteditComponent,
    StudentlistComponent,
    SearchPipe,
    SignInComponent,
    SignUpComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },AuthGuard,
    StudentService,
    UserService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
