import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { EventsComponent } from './pages/events/events';
import { CreateEventComponent } from './pages/create-event';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },
  {
    path: 'events',
    component: EventsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'create',
    component: CreateEventComponent,
    canActivate: [authGuard]
  },

  { path: '', redirectTo: 'events', pathMatch: 'full' }
];
