import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{currentFocus}}</h1>
    <h3>Current date: {{month}}/{{day}}/{{year}}</h3>
    <h3>Game</h3>
    <ul>
      <li (click)="isGood(game)" *ngFor="let game of games">{{game.title}}, {{game.type}}<button (click)="editGame()">Edit</button></li>
    </ul>
    <h3>Tasks</h3>
    <ul>
      <li [class]="priorityColor(task)" (click)="isDone()" *ngFor="let task of tasks">{{task.description}}  <button (click)="editTask(task)">Edit!</button></li>
    </ul>
    <hr>
      <div *ngIf="selectedTask">
        <h3>{{selectedTask.description}}</h3>
        <p>Task Complete? {{selectedTask.done}}</p>
        <h3>Edit Task</h3>
        <label>Enter Task Description:</label>
        <input [(ngModel)]="selectedTask.description">
        <label>Enter Task Priority (1-3):</label>
        <br>
        <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
        <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
        <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)
        <button (click)="finishedEditing()">Done</button>
      </div>
    <h3>Welcome, {{inputName}}!</h3>
    <label for="name">Name</label>
    <input [(ngModel)]="inputName" type="text">
    <label for="search">Search</label>
    <input #name>
    <button (click)="alertMe()">Alert</button>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDay();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task("This is a description.", 3),
    new Task("This is a second task.", 2),
    new Task('Add README file to last few Angular repos on GitHub', 1)
  ];
  selectedTask = null;
  games: Game[] = [
    new Game("Angry Birds", "Mobile Game"),
    new Game("Counter Strike", "FPS"),
    new Game("Halo 3", "FPS")
  ];

  @ViewChild('name') vc;

  ngAfterViewInit() {
    this.vc.nativeElement.focus();
  }

  hasFocus() {

  }

  editGame() {

  }

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  isDone(selectedTask: Task) {
    if(selectedTask.done === true) {
      alert(selectedTask.description + ", is done.");
    } else {
      alert(selectedTask.description + ", is not done.");
    }
  }

  isGood(selectedGame: Game) {
    if(selectedGame.rating === true) {
      alert(selectedGame.title + ", is good.");
    } else {
      alert(selectedGame.title + ", is bad.");
    }
  }

  alertMe() {
    alert("Alert!!");
  }

}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}

export class Game {
  constructor(public title: string, public type: string, public rating: boolean = false) { }
}
