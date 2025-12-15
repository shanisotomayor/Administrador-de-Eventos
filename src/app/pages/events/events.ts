import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.html',
  styleUrls: ['./events.scss']
})
export class EventsComponent implements OnInit {
edit(_t9: Event) {
throw new Error('Method not implemented.');
}

  events$!: Observable<Event[]>;

  constructor(private es: EventService) {}

  ngOnInit() {
    this.events$ = this.es.getEvents();
  }

  toggleStatus(ev: Event) {
    const newStatus = ev.status === 'programado' ? 'completado' : 'programado';
    this.es.updateEvent(ev.id!, { status: newStatus });
  }

  delete(id: string | undefined) {
    if (!id) return;
    const ok = confirm('¿Seguro que deseas eliminar este evento?');
    if (!ok) return;
    
    this.es.deleteEvent(id);
  }
}
