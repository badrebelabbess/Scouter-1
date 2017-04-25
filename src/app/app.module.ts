import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ToolsComponent } from './pageElements/tools/tools.component';
import { IndexComponent } from './contents/index/index.component';
import { HeaderComponent } from './pageElements/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    IndexComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
