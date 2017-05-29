import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../components/contents/home/home.component';
import { WorkflowComponent } from '../../components/contents/workflow/workflow.component';
import { MonitoringComponent } from '../../components/contents/monitoring/monitoring.component';
import { PageNotFoundComponent } from '../../components/pageElements/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'workflow', component: WorkflowComponent},
  { path: 'monitoring', component: MonitoringComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
