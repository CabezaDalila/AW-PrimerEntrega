import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';


export const routes: Routes = [
    {
        path:'',
        component:LandingComponent,
        title:'Landing page'
    },
    {
        path:'login',
        component:LoginComponent,
        title:'Login Page'
    },
];
