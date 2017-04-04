import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TodoRoutingModule } from './todo-routing.module';

import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { ActiveComponent } from './active/active.component';
import { CompletedComponent } from './completed/completed.component';

import { TodoService } from './todo.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    ActiveComponent,
    CompletedComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TodoRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
