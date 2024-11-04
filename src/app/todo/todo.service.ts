import {ToDoModel} from './todo.model';
import {inject, Injectable, signal} from '@angular/core';


import {catchError, map, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  localUrl = 'http://localhost:3000/';

  loadedTasks: ToDoModel[] = [];

  private httpClient = inject(HttpClient);

  createAndStoreTask(toDoModel: ToDoModel) {
    console.log(toDoModel);
    return this.httpClient.post<{
      todo: ToDoModel
    }>(this.localUrl + "tasksAdd", toDoModel).subscribe(responseData => {
      console.log(responseData);
    });
  }

  addTaskToArray(toDoModel: ToDoModel) {
    const prevTasks = this.loadedTasks;

    // if (!prevTasks.some((task) => task.id === toDoModel.id)) {
    this.loadedTasks = [...prevTasks, toDoModel];
    // }

    console.log('Selected task: ' + toDoModel.title);
    return this.httpClient.post(this.localUrl + "tasksAdd", {
      taskId: toDoModel.id,
    })
      .pipe(
        catchError(err => {
          this.loadedTasks = prevTasks;
          return throwError(() => new Error('Failed to stored selected task.'));
        }),
      )
  }


  fetchTasks() {
    return this.httpClient
      .get<ToDoModel[]>(this.localUrl + "tasksAdd")
  }


  // changeTaskState(task: ToDoModel) {
  //   return this.httpClient.post(`this.localUrl + "tasksAdd/${task.id}`, {
  //     isCompleted: task.isCompleted,
  //   });
  // }

  changeTaskState(task: ToDoModel) {
    return this.httpClient.post(this.localUrl + `tasksAdd/${task.id}`, {
      isCompleted: task.isCompleted,
    }).subscribe(responseData => {
      console.log(responseData);
    });
  }
}
