import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { ToolsComponent } from './components/pageElements/tools/tools.component';
import { IndexComponent } from './components/contents/index/index.component';
import { HeaderComponent } from './components/pageElements/header/header.component';
import { PageNotFoundComponent } from './components/pageElements/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    IndexComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
