import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { ActiveComponent } from './active/active.component';
import { CompletedComponent } from './completed/completed.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all',  component: AllComponent },
  { path: 'active', component: ActiveComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '**', component: AllComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class TodoRoutingModule {

}
