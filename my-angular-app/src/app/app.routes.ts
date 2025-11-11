import { RouterModule, Routes } from '@angular/router';
import { Body } from './body/body';
import { About } from './about/about';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { User } from './user/user';
import { Login } from './login/login';
import { Register } from './register/register';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: Body, title: 'Home - My Company' },
    { path: 'about', component: About, title: 'About - My Company' },
    { path: 'services', component: Services, title: 'Services - My Company' },
    { path: 'contact', component: Contact, title: 'Contact - My Company' },
    { path: 'users', component: User, title: 'User Management - My Company' },
    { path: 'login',component: Login, title: 'Login - My Company' },
    { path: 'register',component: Register, title: 'Register - My Company' },
    
    { path: '**', redirectTo: '' }, // redirect unknown URLs to home

];
