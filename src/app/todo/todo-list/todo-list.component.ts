import {Component, inject, Input} from '@angular/core';
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
export class TodoListComponent {

  private todoService = inject(TodoService);


  get tasks() {
    return this.todoService.allTasksTable.sort();
  }

}
