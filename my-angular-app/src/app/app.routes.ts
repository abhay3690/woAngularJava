import { RouterModule, Routes } from '@angular/router';
import { Body } from './componentweb/body/body';
import { About } from './about/about';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { User } from './componentweb/user/user';
import { Login } from './componentweb/login/login';
import { NgModule } from '@angular/core';
import { AuthGuard } from './componentweb/service/auth.guard';
import { Register } from './componentweb/register/register';
import { Resetpassword } from './componentweb/resetpassword/resetpassword';
import { Forgetpassword } from './componentweb/forgetpassword/forgetpassword';

export const routes: Routes = [
    { path: '', component: Body, title: 'Home - My Company' },
    { path: 'about', component: About, title: 'About - My Company' },
    { path: 'services', component: Services, title: 'Services - My Company' },
    { path: 'contact', component: Contact, title: 'Contact - My Company' },
    { path: 'users', component: User, title: 'User Management - My Company', canActivate: [AuthGuard] },
    { path: 'login', component: Login, title: 'Login - My Company' },
    { path: 'register', component: Register, title: 'Register - My Company' },
    { path: 'resetpassword', component: Resetpassword, title: 'Reset- password' },
    { path: 'forgetpassword', component: Forgetpassword, title: 'Forget- password' },


    { path: '**', redirectTo: '' }, // redirect unknown URLs to home

];
