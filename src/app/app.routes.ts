import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Products } from './components/products/products';
import { Contacts } from './components/contacts/contacts';
import { NotFound } from './components/not-found/not-found';
import { Details } from './components/details/details';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'Home', component: Home },
    { path: 'AboutUs', component: AboutUs },
    { path: 'Products', component: Products ,
        children: [
            
        ]
    },
    { path: 'Products/Details/:id', component: Details },
    { path: 'Contacts', component: Contacts },
    { path: '**', component: NotFound }
];
