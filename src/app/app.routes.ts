import { Routes } from '@angular/router';
import { title } from 'process';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent,
        title:'Login Page'
    }
];
