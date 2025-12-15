import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { LayoutComponent } from './layout/layout';
import { EventsComponent } from './pages/events/events';
import { CreateEventComponent } from './pages/create-event';
import { authGuard } from './guards/auth-guard';
import { CategoriesComponent } from './pages/categories/categories';

export const routes: Routes = [
  { path: 'login', component: Login },

  { path: 'categories', component: CategoriesComponent },

  {path: '', component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'events', component: EventsComponent },
      { path: 'create', component: CreateEventComponent },
      { path: '', redirectTo: 'events', pathMatch: 'full' }
    ]
  }
];
