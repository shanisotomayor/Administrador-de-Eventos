import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.servise';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.html'
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  name = '';
  color = '#000000';

  constructor(private cs: CategoryService) {}

  ngOnInit() {
    this.cs.getCategories().subscribe(c => this.categories = c);
  }

  save() {
    this.cs.addCategory({ name: this.name, color: this.color });
    this.name = '';
  }
}