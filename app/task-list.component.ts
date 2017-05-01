import { Component } from '@angular/core'

@Component({
  selector: 'task-list',
  template: `
    <ul>
      <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}} <button (click)="editTask(currentTask)">Edit!</button></li>
    </ul>
  `
})

export class TaskListComponent {
  
}
