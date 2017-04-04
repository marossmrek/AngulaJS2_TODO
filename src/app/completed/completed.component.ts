import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styles: []
})
export class CompletedComponent implements OnInit {

	tasks : Todo[];
	typ: string = 'Completed';

	constructor( private todoService: TodoService, private router : Router ){}

    //function which call function from service, which get all completed tasks
	getCompletedTasks() : void{
		this.todoService.getSpecificTasks('Completed').then(t=> {this.tasks = t});
    }

    // call function from service, which moves task to list of completed tasks
	addToCompleted( task : Todo ){
		
		if (task.typos == 'Completed'){
			this.typ = 'Active'
			
		}else if (task.typos == 'Active'){
			this.typ = 'Completed'
		}

		this.todoService.toCompleted(task, this.typ).then(() => this.getCompletedTasks()) 
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
			this.todoService.delete(id).then(()=>this.getCompletedTasks());
		}
	}

	//OnInit call function getCompletedTasks
	ngOnInit() {
		this.getCompletedTasks();
	}

}
