import {ToDoModel} from './todo.model';
import {inject, Injectable, signal} from '@angular/core';


import {catchError, map, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  loadedTasks: ToDoModel[] = [];

  private httpClient = inject(HttpClient);

  createAndStoreTask(toDoModel: ToDoModel) {
    console.log(toDoModel);
    return this.httpClient.post<{
      todo: ToDoModel
    }>('http://localhost:3000/tasksAdd', toDoModel).subscribe(responseData => {
      console.log(responseData);
    });
  }

  addTaskToArray(toDoModel: ToDoModel) {
    const prevTasks = this.loadedTasks;

    // if (!prevTasks.some((task) => task.id === toDoModel.id)) {
    this.loadedTasks = [...prevTasks, toDoModel];
    // }

    console.log('Selected task: ' + toDoModel.title);
    return this.httpClient.post('http://localhost:3000/tasksAdd', {
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
      .get<{ [key: string]: ToDoModel }>('http://localhost:3000/tasksAdd')
      .pipe(
        map(responseData => {
          const postArray: ToDoModel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({...responseData[key], id: key});
            }
          }
          console.log(postArray);
          return postArray;
        }))
  }


  changeTaskState(task: ToDoModel) {
    return this.httpClient.put(`http://localhost:3000/tasksAdd/${task.id}`, {
      isCompleted: task.isCompleted,
    });
  }
}
