import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const url='http://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) {
  }

  addTask(data: any): Observable<any>{
    return this._http.post(url, data);
  }

  getData(): Observable<any>{
    return this._http.get<any>(url)
  }

  deleteData(id: number): Observable<any>{
    return this._http.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
  }
}
