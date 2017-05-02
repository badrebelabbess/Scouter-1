import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LocalStorageModule } from 'angular-2-local-storage';
import { PopupModule } from 'ng2-opd-popup';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';
import { LeafletDrawModule } from '@asymmetrik/angular2-leaflet-draw';

import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { ToolsComponent } from './components/pageElements/tools/tools.component';
import { IndexComponent } from './components/contents/index/index.component';
import { HeaderComponent } from './components/pageElements/header/header.component';
import { PageNotFoundComponent } from './components/pageElements/page-not-found/page-not-found.component';
import { DbpediaFormComponent } from './components/contents/forms/dbpedia-form/dbpedia-form.component';
import { MonitoringComponent } from './components/contents/monitoring/monitoring.component';
import { TwitterFormComponent } from './components/contents/forms/twitter-form/twitter-form.component';
import { FacebookFormComponent } from './components/contents/forms/facebook-form/facebook-form.component';
import { OpenAgendaFormComponent } from './components/contents/forms/open-agenda-form/open-agenda-form.component';
import { OwmFormComponent } from './components/contents/forms/owm-form/owm-form.component';
import { BoundingBoxFormComponent } from './components/contents/forms/bounding-box-form/bounding-box-form.component';
import { EventfulFormComponent } from './components/contents/forms/eventful-form/eventful-form.component';
import { RssFormComponent } from './components/contents/forms/rss-form/rss-form.component';
import { KeywordsFormComponent } from './components/contents/forms/keywords-form/keywords-form.component';
import { OpenDataFormComponent } from './components/contents/forms/open-data-form/open-data-form.component';
import { SocialNetworksFormComponent } from './components/contents/forms/social-networks-form/social-networks-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    IndexComponent,
    HeaderComponent,
    PageNotFoundComponent,
    DbpediaFormComponent,
    MonitoringComponent,
    TwitterFormComponent,
    FacebookFormComponent,
    OpenAgendaFormComponent,
    OwmFormComponent,
    BoundingBoxFormComponent,
    EventfulFormComponent,
    RssFormComponent,
    KeywordsFormComponent,
    OpenDataFormComponent,
    SocialNetworksFormComponent
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
    PopupModule.forRoot(),
    LeafletModule,
    LeafletDrawModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
