import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';


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
    {
        path:'home',
        component:HomeComponent,
        title:'Home Page'
    },
];
