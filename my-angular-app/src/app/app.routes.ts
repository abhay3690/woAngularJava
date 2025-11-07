import { Routes } from '@angular/router';
import { Body } from './body/body';
import { About } from './about/about';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { User } from './user/user';

export const routes: Routes = [
    { path: '', component: Body, title: 'Home - My Company' },
    { path: 'about', component: About, title: 'About - My Company' },
    { path: 'services', component: Services, title: 'Services - My Company' },
    { path: 'contact', component: Contact, title: 'Contact - My Company' },
    { path: 'users', component: User, title: 'User Management - My Company' },
    { path: '**', redirectTo: '' }, // redirect unknown URLs to home

];
