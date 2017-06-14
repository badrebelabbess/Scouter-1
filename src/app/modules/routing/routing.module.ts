import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';

import { HomeComponent } from '../../components/contents/home/home.component';
import { WorkflowComponent } from '../../components/contents/workflow/workflow.component';
import { MonitoringComponent } from '../../components/contents/monitoring/monitoring.component';
import { AboutComponent } from '../../components/contents/about/about.component';
import { PageNotFoundComponent } from '../../components/pageElements/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'workflow', component: WorkflowComponent},
  { path: 'monitoring', component: MonitoringComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
