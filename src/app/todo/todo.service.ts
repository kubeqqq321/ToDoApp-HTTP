import {ToDoModel} from './todo.model';
import {inject, Injectable, signal} from '@angular/core';


import {BehaviorSubject, catchError, map, Subject, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  localUrl = 'http://localhost:3000/';
  mySubject = new Subject<ToDoModel>();

  private httpClient = inject(HttpClient);

  createAndStoreTask(toDoModel: ToDoModel) {
    console.log(toDoModel);
    return this.httpClient.post<{ todo: ToDoModel }>(this.localUrl + "tasksAdd", toDoModel)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  getAllTasks() {
    return this.httpClient.get<ToDoModel[]>(this.localUrl + "tasksAdd");
  }

  changeTaskState(task: ToDoModel) {
    task.isCompleted = !task.isCompleted;

    return this.httpClient.put(this.localUrl + `tasksAdd/${task.id}`, task).subscribe({
      //zawartość subscribe jest opcjonalna można ją usunąć
      next: (res) => {
        console.log('Zmieniono status zadania:', res);
      },
      error: (error) => {
        console.log('Błąd zmiany statusu zadania:', error);
      }
    });
  }


  deleteTask(task: ToDoModel) {
    return this.httpClient.delete(this.localUrl + `tasksAdd/${task.id}`).subscribe()
  }

  getTaskById(task: ToDoModel) {
    return this.httpClient.get<ToDoModel>(this.localUrl + `tasksAdd/${task.id}`).subscribe()
  }

}
