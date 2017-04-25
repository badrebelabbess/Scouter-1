import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from '../contents/index/index.component';
import { PageNotFoundComponent } from '../pageElements/page-not-found/page-not-found.component';

const routes: Routes = [
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
