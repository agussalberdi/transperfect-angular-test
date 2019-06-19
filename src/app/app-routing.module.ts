import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesListComponent } from './components/issues-list/issues-list.component';

const routes: Routes = [
  {
    path: '',
    component: IssuesListComponent,
    data: { title: 'Issues List' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
