import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: 'landing',
        component: LandingComponent,
        title: 'Landing page'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login Page'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page'
    }
];
