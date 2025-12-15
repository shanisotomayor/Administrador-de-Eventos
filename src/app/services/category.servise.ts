import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private firestore = inject(Firestore);
  private col = collection(this.firestore, 'categories');

  getCategories(): Observable<Category[]> {
    return collectionData(this.col, { idField: 'id' }) as Observable<Category[]>;
  }

  addCategory(cat: Category) {
    return addDoc(this.col, cat);
  }
}