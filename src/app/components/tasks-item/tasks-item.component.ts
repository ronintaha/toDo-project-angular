import { Component,Input } from '@angular/core';
import {Task} from '../../Task'
import {TASKS} from "../../mock-tasks";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent {
@Input() tasK: Task[]=TASKS;
faTimes= faTimes;
}
