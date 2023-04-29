import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TaskService} from "../services/task.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.scss']
})
export class TaskAddEditComponent implements OnInit{

  tasksForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _taskService: TaskService, private _dialog: MatDialogRef<TaskAddEditComponent>,@Inject(MAT_DIALOG_DATA) private data: any) {
    this.tasksForm = this._formBuilder.group({
      userID: '',
      taskTitle: '',
      completed: '',
      id: ''
    })
  }

  ngOnInit() {
    this.tasksForm.patchValue(this.data);
  }

  public onFormSubmit(){
    if (this.tasksForm.valid){
      this._taskService.addTask(this.tasksForm.value).subscribe({
        next: (val: any) =>{
          alert('Task added successFully ')
          this._dialog.close(true);
        },
        error: (err: any) =>{
          console.error(err)
        }
      });
    }
  }
}
