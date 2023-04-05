import { Component } from '@angular/core';
import {Task} from '../../Task';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  constructor(private taskService: TaskService) {
  }
task:Task[] = [];

  ngOnInit(): void{
    this.task = this.taskService.getTasks();
  }
}
