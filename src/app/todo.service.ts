import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Todo } from './todo';

//import rxjs function
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class TodoService {


  private tasksUrl = 'api/tasks'; //url to mockup server, tasks exported class hold our data  
  private headers = new Headers({'Content-Type': 'application/json'}); //headers of our request


  constructor(private http: Http) { }


  //function get all tasks
  getTasks(): Promise<Todo[]> {
    return this.http.get(this.tasksUrl)
               .toPromise()
               .then(response => response.json().data as Todo[])
               .catch(this.handleError);
  }


  //function get completed or active tasks from list of all tasks
  getSpecificTasks(typ : string): Promise<Todo[]> {
	  let params = new URLSearchParams();
    params.set('typos', typ); 
    return this.http.get(this.tasksUrl, { search: params })
               .toPromise()
               .then(response => response.json().data as Todo[])
               .catch(this.handleError);
  }


  //function get editing task
  getEditTask(id: number): Promise<Todo> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Todo)
      .catch(this.handleError);
  }


  //function add new task to list of all tasks
  addTask(name: string): Promise<Todo> {
    return this.http
      .post(this.tasksUrl, JSON.stringify({desc: name,typos:'Active'}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Todo)
      .catch(this.handleError);
  }


  //function to change active task to completed task
  toCompleted(task: Todo, typ:string): Promise<Todo> {
    const url = `${this.tasksUrl}/${task.id}`;
    task = {id: task.id, typos: typ, desc: task.desc};
    return this.http
      .put(url, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }


   //function to change active task to completed task
  update(task: Todo): Promise<Todo> {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http
      .put(url, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }

  //function delete task from all tasks list
  delete(id: number): Promise<void> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  // test error function, write eroor to console 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
