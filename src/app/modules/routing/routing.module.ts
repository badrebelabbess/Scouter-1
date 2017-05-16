import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from '../../components/contents/index/index.component';
import { MonitoringComponent } from '../../components/contents/monitoring/monitoring.component';
import { PageNotFoundComponent } from '../../components/pageElements/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'monitoring', component: MonitoringComponent},
  // { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: '', component: IndexComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
