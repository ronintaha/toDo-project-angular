import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TaskAddEditComponent} from "./task-add-edit/task-add-edit.component";
import {TaskService} from "./services/task.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: String = 'task tracker';
  constructor(private _dialog: MatDialog,private _taskService: TaskService) {
  }

  displayedColumns: string[] = ['id', 'userId', 'title', 'completed','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.getTaskList();
  }

  openAddEditForm(){
  const dialogRef = this._dialog.open(TaskAddEditComponent);
  dialogRef.afterClosed().subscribe({
    next: (val)=>{
        if (val){
        this.getTaskList();
        }
    },
    error: (err)=>{
      console.log(err);
    }
  })
}

  getTaskList(){
    this._taskService.getData().subscribe({
      next: (res)=>{
          this.dataSource = new MatTableDataSource<any>(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
      },
      error: (err)=>{
        console.log(err);
      }
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteTask(id: number){
    this._taskService.deleteData(id).subscribe({
      next: (res)=>{
        alert('task deleted!')
        this.getTaskList();
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  openEditForm(data: any){
   this._dialog.open(TaskAddEditComponent,{
     data,
   });

  }

}
