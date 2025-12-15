import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-event.html',
  styleUrls: ['./create-event.scss']
})
export class CreateEventComponent implements OnInit {

  // 🔹 CATEGORÍAS (segunda entidad)
  categories = [
    { id: 'work', name: 'Trabajo' },
    { id: 'study', name: 'Estudio' },
    { id: 'personal', name: 'Personal' }
  ];

  evento: Event = {
    title: '',
    date: '',
    time: '',
    description: '',
    status: 'programado',
    categoryId: ''
  };

  constructor(
    private es: EventService,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit() {
    // si viene desde editar
    const state = history.state;
    if (state?.title) {
      this.evento = state;
    }
  }

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
