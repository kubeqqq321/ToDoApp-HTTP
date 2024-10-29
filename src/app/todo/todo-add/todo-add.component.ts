import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {WrapperElementComponent} from '../../wrapper-element/wrapper-element.component';
import {ToDoModel} from '../todo.model';
import {TodoService} from '../todo.service';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormField,
    MatInput,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatLabel,
    MatDivider,
    FormsModule,
    WrapperElementComponent,
    NgIf,
  ],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAddComponent {

  titleTask: string = '';

  private todoService = inject(TodoService);

  onSubmit() {
    this.todoService.addTask({
      id: new Date().getDate(),
      title: this.titleTask,
      isCompleted: false
    });
    console.log(this.titleTask);
  }
}
