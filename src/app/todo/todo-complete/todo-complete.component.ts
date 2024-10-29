import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from '@angular/forms';
import {WrapperElementComponent} from '../../wrapper-element/wrapper-element.component';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatIcon} from '@angular/material/icon';
import {MatListItem} from '@angular/material/list';
import {NgForOf, NgIf} from '@angular/common';
import {TodoService} from '../todo.service';
import {TodoListItemComponent} from '../todo-list-item/todo-list-item.component';
import {ToDoModel} from '../todo.model';
import {MatBadge} from '@angular/material/badge';

@Component({
  selector: 'app-todo-complete',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatLabel,
    FormsModule,
    WrapperElementComponent,
    MatCardContent,
    MatCheckbox,
    MatIcon,
    MatListItem,
    NgForOf,
    NgIf,
    TodoListItemComponent,
    MatBadge
  ],
  templateUrl: './todo-complete.component.html',
  styleUrl: './todo-complete.component.css'
})
export class TodoCompleteComponent {

  private todoService = inject(TodoService);

  get tasks() {
    return this.todoService.allCompletedTasksTable;
  }

  onUncheck(task: ToDoModel) {
    this.todoService.markTaskAsUncompleted(task.id);
  }

}
