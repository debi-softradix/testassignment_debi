import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';



const routes: Routes = [
  {
    path:'Registration',
    component:RegistrationComponent

  },
  {
    path:'Login',
    component:LoginComponent
  },
  { path:'Result',
  component:ResultComponent,

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
