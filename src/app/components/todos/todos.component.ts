import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'To Do One',
        completed: false
      },
      {
        id: 2,
        title: 'To Do Two',
        completed: true
      },
      {
        id: 3,
        title: 'To Do Three',
        completed: false
      }
    ]
  }

}
