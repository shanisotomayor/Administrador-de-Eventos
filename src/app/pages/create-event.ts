import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../../app/services/event.service';
import { Auth } from '@angular/fire/auth';
import { Event } from '../../app/models/event.model';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  constructor(
    private es: EventService,
    private auth: Auth,
    private router: Router
  ) {}

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

    alert('Evento guardado correctamente');
    this.router.navigate(['/events']);
  }
}