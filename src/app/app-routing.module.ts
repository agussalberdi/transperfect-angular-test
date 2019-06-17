import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesListComponent } from './components/issues-list/issues-list.component';

const routes: Routes = [
  {
    path: 'issues-list',
    component: IssuesListComponent,
    data: { title: 'Issues List' }
  },
  { path: '',
    redirectTo: '/issues-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
