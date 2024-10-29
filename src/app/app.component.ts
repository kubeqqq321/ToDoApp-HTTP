import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TodoListComponent} from './todo/todo-list/todo-list.component';
import {TodoAddComponent} from './todo/todo-add/todo-add.component';
import {TodoCompleteComponent} from './todo/todo-complete/todo-complete.component';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {HeaderComponent} from './header/header.component';
import {WrapperElementComponent} from './wrapper-element/wrapper-element.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, TodoAddComponent, TodoCompleteComponent, MatCardHeader, MatCard, MatCardContent, MatFormField, MatInput, MatButton, HeaderComponent, WrapperElementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoApp';
}
