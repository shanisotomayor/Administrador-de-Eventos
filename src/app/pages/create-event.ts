import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Auth } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-event.html'
})
export class CreateEventComponent {

  evento: Event = {
    title: '',
    date: '',
    time: '',
    category: '',
    description: '',
    status: 'programado'
  };

  constructor(private es: EventService, private auth: Auth, private router: Router) {}

  async save() {
    const user = this.auth.currentUser;
    if (!user) {
      alert('Debes iniciar sesión');
      return;
    }

    await this.es.addEvent({
      ...this.evento,
      userId: user.uid
    });

    this.router.navigate(['/events']);
  }
}
