import {Injectable} from '@angular/core';
import {ToDoModel} from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private taskTable: ToDoModel[] = [];
  private completedTaskTable: ToDoModel[] = [];

  get allTasksTable() {
    return this.taskTable
  }

  get allCompletedTasksTable() {
    return this.completedTaskTable
  }
  
  addTask(taskData: ToDoModel) {
    this.taskTable.push({
      id: new Date().getTime(),
      title: taskData.title,
      isCompleted: false,
    });
    console.log('Task added: ' + taskData.title);
  }

  taskComplete(taskId: number) {
    this.markTaskAsCompleted(taskId);
  }

  markTaskAsCompleted(taskId: number) {
    const task = this.taskTable.find((task) => task.id === taskId);
    if (task) {
      task.isCompleted = true;
      this.taskTable = this.taskTable.filter((task) => task.id !== taskId);
      this.completedTaskTable.push(task);
      this.completedTaskTable.sort((a, b) => a.id - b.id);
    }
  }

  markTaskAsUncompleted(taskId: number) {
    const task = this.completedTaskTable.find((task) => task.id === taskId);
    if (task) {
      task.isCompleted = false;
      this.completedTaskTable = this.completedTaskTable.filter((task) => task.id !== taskId);
      this.taskTable.push(task);
      this.taskTable.sort((a, b) => a.id - b.id);
    }
  }

}
