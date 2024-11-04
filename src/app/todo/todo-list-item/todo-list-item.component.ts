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
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';

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
    MatLabel,
    MatGridList,
    MatGridTile,
    MatToolbarRow,
    MatToolbar,
    MatIconButton
  ],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {

  @Input({required: true}) task!: ToDoModel;
  private todoService = inject(TodoService);

  onChangeState(task: ToDoModel) {
    this.todoService.changeTaskState(task);
    if (task.isCompleted) {
      // this.todoService.deleteTask(task);
      console.log('Task is completed');
    } else {
      this.todoService.getTaskById(task);
      // this.todoService.createAndStoreTask(task);
    }
  }

  onDeleteTask(task: ToDoModel) {
    this.todoService.deleteTask(task);
  }
}
