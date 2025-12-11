import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    this.es.deleteEvent(id);
  }
}
