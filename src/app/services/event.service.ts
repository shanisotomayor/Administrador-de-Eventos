import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events: Event[] = [];

  getEvents(): Observable<Event[]> {
    return of(this.events);
  }

  addEvent(event: Event) {
    event.id = Date.now().toString();
    this.events.push(event);
  }

  updateEvent(id: string, data: Partial<Event>) {
    const ev = this.events.find(e => e.id === id);
    if (ev) {
      Object.assign(ev, data);
    }
  }

  deleteEvent(id: string) {
    this.events = this.events.filter(e => e.id !== id);
  }
}
