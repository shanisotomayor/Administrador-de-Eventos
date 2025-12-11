import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { EventsComponent } from './pages/events/events';
import { CreateEventComponent } from './pages/create-event';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: Dashboard },
  { path: 'events', component: EventsComponent },
  { path: 'create', component: CreateEventComponent },

  { path: '', redirectTo: 'events', pathMatch: 'full' }
];
