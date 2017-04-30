import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LocalStorageModule } from 'angular-2-local-storage';
import { PopupModule } from 'ng2-opd-popup';

import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { ToolsComponent } from './components/pageElements/tools/tools.component';
import { IndexComponent } from './components/contents/index/index.component';
import { HeaderComponent } from './components/pageElements/header/header.component';
import { PageNotFoundComponent } from './components/pageElements/page-not-found/page-not-found.component';
import { DbpediaFormComponent } from './components/contents/forms/dbpedia-form/dbpedia-form.component';
import { MonitoringComponent } from './components/contents/monitoring/monitoring.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    IndexComponent,
    HeaderComponent,
    PageNotFoundComponent,
    DbpediaFormComponent,
    MonitoringComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    FlexLayoutModule,
    RoutingModule,
    ReactiveFormsModule,
    LocalStorageModule.withConfig({
        prefix: 'app-root',
        storageType: 'localStorage'
    }),
    PopupModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
