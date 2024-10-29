import {Component, inject, Input} from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {MatCheckbox} from '@angular/material/checkbox';
import {TodoService} from '../todo.service';
import {ToDoModel} from '../todo.model';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';
import {MatTooltip} from '@angular/material/tooltip';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [
    MatListItem,
    MatCheckbox,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatList,
    MatIcon,
    NgIf,
    MatTooltip,
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {

  @Input({required: true}) task!: ToDoModel;
  private todoService = inject(TodoService);

  onChecked(task: ToDoModel) {
    this.todoService.taskComplete(task.id);
  }

  onUncheck(task: ToDoModel) {
    this.todoService.markTaskAsUncompleted(task.id);
  }

  onChangeState(task: ToDoModel) {
    switch (task.isCompleted) {
      case false:
        this.onChecked(task);
        break;
      default:
        this.onUncheck(task);
    }
  }

}
