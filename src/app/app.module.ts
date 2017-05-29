import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LocalStorageModule } from 'angular-2-local-storage';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';
import { LeafletDrawModule } from '@asymmetrik/angular2-leaflet-draw';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { RoutingModule } from './modules/routing/routing.module';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { ToolsComponent } from './components/pageElements/tools/tools.component';
import { WorkflowComponent } from './components/contents/workflow/workflow.component';
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
import { AccordionComponent } from './components/pageElements/accordion/accordion.component';
import { AccordionGroupComponent } from './components/pageElements/accordion-group/accordion-group.component';
import { LineChartComponent } from './components/contents/visualizations/line-chart/line-chart.component';
import { MultilineChartComponent } from './components/contents/visualizations/multiline-chart/multiline-chart.component';
import { PieChartComponent } from './components/contents/visualizations/pie-chart/pie-chart.component';
import { ColumnChartComponent } from './components/contents/visualizations/column-chart/column-chart.component';
import { GaugeComponent } from './components/contents/visualizations/gauge/gauge.component';
import { QueryTimeChartComponent } from './components/contents/visualizations/query-time-chart/query-time-chart.component';
import { ScoredEventsChartComponent } from './components/contents/visualizations/scored-events-chart/scored-events-chart.component';
import { ScoringTimeChartComponent } from './components/contents/visualizations/scoring-time-chart/scoring-time-chart.component';
import { TopicExtractionChartComponent } from './components/contents/visualizations/topic-extraction-chart/topic-extraction-chart.component';
import { LastBytesInChartComponent } from './components/contents/visualizations/last-bytes-in-chart/last-bytes-in-chart.component';
import { LastBytesOutChartComponent } from './components/contents/visualizations/last-bytes-out-chart/last-bytes-out-chart.component';
import { DocumentsChartComponent } from './components/contents/visualizations/documents-chart/documents-chart.component';
import { LastUptimeChartComponent } from './components/contents/visualizations/last-uptime-chart/last-uptime-chart.component';
import { KafkaTopicsChartComponent } from './components/contents/visualizations/kafka-topics-chart/kafka-topics-chart.component';
import { MemoryUsageChartComponent } from './components/contents/visualizations/memory-usage-chart/memory-usage-chart.component';
import { MemoryNonUsageChartComponent } from './components/contents/visualizations/memory-non-usage-chart/memory-non-usage-chart.component';
import { KafkaUptimeChartComponent } from './components/contents/visualizations/kafka-uptime-chart/kafka-uptime-chart.component';
import { HomeComponent } from './components/contents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    WorkflowComponent,
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
    SocialNetworksFormComponent,
    AccordionComponent,
    AccordionGroupComponent,
    LineChartComponent,
    MultilineChartComponent,
    PieChartComponent,
    ColumnChartComponent,
    GaugeComponent,
    QueryTimeChartComponent,
    ScoredEventsChartComponent,
    ScoringTimeChartComponent,
    TopicExtractionChartComponent,
    LastBytesInChartComponent,
    LastBytesOutChartComponent,
    DocumentsChartComponent,
    LastUptimeChartComponent,
    KafkaTopicsChartComponent,
    MemoryUsageChartComponent,
    MemoryNonUsageChartComponent,
    KafkaUptimeChartComponent,
    HomeComponent
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
    LeafletModule,
    LeafletDrawModule,
    Ng2Bs3ModalModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
