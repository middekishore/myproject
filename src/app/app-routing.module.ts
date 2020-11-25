import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import{ HomeComponent} from './component/home/home.component';
import { StudentcreateComponent } from './component/studentcreate/studentcreate.component';
import { StudenteditComponent } from './component/studentedit/studentedit.component';
import { StudentlistComponent } from './component/studentlist/studentlist.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';





const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path:'about',component:AboutComponent},
  { path:'contact',component:ContactComponent },
  { path:'gallery',component:GalleryComponent},
  { path:'studentcreate',component:StudentcreateComponent},
  { path:'studentedit/:id',component:StudenteditComponent},
  { path:'singup',component:SignUpComponent},
  { path:'signlogin',component:SignInComponent},

  {
    path: 'studentlist',
    canActivate:[AuthGuard],
    component: StudentlistComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
