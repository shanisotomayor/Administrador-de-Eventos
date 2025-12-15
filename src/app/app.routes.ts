import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { EventsComponent } from './pages/events/events';
import { CreateEventComponent } from './pages/create-event';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // RUTAS PROTEGIDAS
  { path: 'events', component: EventsComponent },
  { path: 'create', component: CreateEventComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];