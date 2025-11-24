import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc, where, query } from '@angular/fire/firestore';
import { Event } from '../../shared/event.model';
import { Auth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  private col = 'eventos';

  constructor(private firestore: Firestore, private auth: Auth) {}

  getEventos(): Observable<Event[]> | undefined {
    const user = this.auth.currentUser;
    if (!user) return undefined;
    const q = query(collection(this.firestore, this.col), where('userId', '==', user.uid));
    return collectionData(q, { idField: 'id' }) as Observable<Event[]>;
  }

  addEvento(data: Event) {
    return addDoc(collection(this.firestore, this.col), data);
  }

  updateEvento(id: string, data: Partial<Event>) {
    return updateDoc(doc(this.firestore, `${this.col}/${id}`), data);
  }

  deleteEvento(id: string) {
    return deleteDoc(doc(this.firestore, `${this.col}/${id}`));
  }
}
