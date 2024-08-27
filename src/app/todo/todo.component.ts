import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todos: { task: string; completed: boolean } [] = [];
  nomTache : string = '';

  ngOnInit() {

    const todoSave = localStorage.getItem('todos');

    if (todoSave != null) {
      this.todos = JSON.parse(todoSave);
    }
  }

  addTask() {
    if (this.nomTache != '') {
      this.todos.push({ task: this.nomTache, completed: false});
      this.nomTache = '';
      this.save()
    }
  }

  deleteTask(index: number) {
    this.todos.splice(index, 1);
    this.save()
  }

  toggleCompletion(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.save()
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    
  }
}
