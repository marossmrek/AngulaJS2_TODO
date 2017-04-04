import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styles: []
})

export class AllComponent implements OnInit  {

	tasks : Todo[];
	typ: string = 'Active';
	
	constructor( private router : Router, private todoService : TodoService ) {}

	//call function from service, which gets all my tasks
	getTasks() : void{
		this.todoService.getTasks().then(t=> this.tasks = t);
	}

    //call function from service, which add new task to my todo list
	addNewTask(task : string) : void{
		task = task.trim();
		if( !task ) { return }
	    this.todoService.addTask(task)
	      .then(t => {
	        this.tasks.push(t);
	      });
	}

    // call function from service, which moves task to list of completed tasks
	addToCompleted( task : Todo ){
		
		if (task.typos == 'Completed'){
			this.typ = 'Active'
			
		}else if (task.typos == 'Active'){
			this.typ = 'Completed'
		}

		this.todoService.toCompleted(task, this.typ).then(() => this.getTasks()) 
	}

    //function redirect to edit component whit id of task, which will be editing
	editTask( id:number ){
		this.router.navigate(['/edit', id]);
	}

    //call function, which delete task from list, before popup window to confirm delete this task 
	deleteTask(id: number){
		let realy : any;
		realy = confirm("Sure delete?");
		if(realy){
			this.todoService.delete(id).then(()=>this.getTasks());
		}
		
	}

    //OnInit function call getTasks function
	ngOnInit() :void{
		this.getTasks();
	}

}
