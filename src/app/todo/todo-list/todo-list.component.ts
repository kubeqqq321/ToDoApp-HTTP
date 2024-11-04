import {Component, DestroyRef, inject, Input, OnInit, Output} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {WrapperElementComponent} from '../../wrapper-element/wrapper-element.component';
import {FormsModule} from '@angular/forms';
import {MatList, MatListItem} from '@angular/material/list';
import {MatCheckbox} from '@angular/material/checkbox';
import {NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatBadge} from '@angular/material/badge';
import {MatTooltip} from '@angular/material/tooltip';
import {TodoService} from '../todo.service';
import {TodoListItemComponent} from '../todo-list-item/todo-list-item.component';
import {HttpClientModule} from '@angular/common/http';
import {ToDoModel} from '../todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    MatCardHeader,
    MatFormField,
    MatCardActions,
    MatButton,
    MatInput,
    MatCard,
    MatCardTitle,
    MatLabel,
    MatCardContent,
    WrapperElementComponent,
    FormsModule,
    MatList,
    MatListItem,
    MatCheckbox,
    NgForOf,
    MatIcon,
    NgIf,
    MatBadge,
    MatTooltip,
    TodoListItemComponent,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {

  private todoService = inject(TodoService);
  private destroyRef = inject(DestroyRef);

  isFetching = false;

  // @Input({required: true}) tasks: ToDoModel[] = [];
  // @Output() taskArray: ToDoModel[] = [];

  taskArray: ToDoModel[] = [];

  ngOnInit() {
    this.isFetching = true;
    this.todoService.fetchTasks()
      .subscribe(tasks => {
        this.taskArray = tasks;
        this.isFetching = false;
        console.log('Pobrane zadania:', this.taskArray);
      });

  }
  
}
