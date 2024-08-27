import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recap',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.scss',
})
export class RecapComponent {
  todos: { task: string; completed: boolean } [] = [];
  constructor() {}

  ngOnInit() {

    const todoSave = localStorage.getItem('todos');

    if (todoSave != null) {
      this.todos = JSON.parse(todoSave);
    }
  }
}
