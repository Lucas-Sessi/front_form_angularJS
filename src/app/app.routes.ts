import { Routes } from '@angular/router';
import { BookCreateComponent } from './components/books/book-create-component/book-create-component.component';
import { BookGetComponent } from './components/books/book-get-component/book-get-component.component';
import { BookUpdateComponent } from './components/books/book-update/book-update.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'books',
        component: BookGetComponent
    },
    {
        path: 'books/create',
        component: BookCreateComponent
    },
    {
        path: 'books/edit/:id',
        component: BookUpdateComponent,
    }
];