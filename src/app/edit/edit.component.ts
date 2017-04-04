import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {

  task : Todo;
 
  constructor( private todoService: TodoService, private router: ActivatedRoute, private location : Location ) { }

  //OnInit call function from service, which get data of editing task
  ngOnInit() {
	this.router.params
		.switchMap((params: Params) => this.todoService.getEditTask(+params['id']))
		.subscribe(task => this.task = task);
  }

  //simple goback function
  goBack() {
  	this.location.back();
  }
 
  //function call function from service, which save editing data
  save(){
  	this.todoService.update(this.task).then(()=>this.goBack());
  }

}
