import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc, query, where } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Event } from '../models/event.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventService {
  private col = 'events';
  constructor(private firestore: Firestore, private auth: Auth) {}

  getEvents(): Observable<Event[]> {
    const user = this.auth.currentUser;
    if (!user) return of([]);
    const ref = collection(this.firestore, this.col);
    const q = query(ref, where('userId', '==', user.uid));
    return collectionData(q, { idField: 'id' }) as Observable<Event[]>;
  }

  addEvent(ev: Omit<Event, 'id'>) {
    return addDoc(collection(this.firestore, this.col), ev);
  }

  updateEvent(id: string, data: Partial<Event>) {
    return updateDoc(doc(this.firestore, `${this.col}/${id}`), data);
  }

  deleteEvent(id: string) {
    return deleteDoc(doc(this.firestore, `${this.col}/${id}`));
  }
}