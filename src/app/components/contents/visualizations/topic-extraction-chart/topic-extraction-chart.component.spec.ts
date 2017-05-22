import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicExtractionChartComponent } from './topic-extraction-chart.component';

describe('TopicExtractionChartComponent', () => {
  let component: TopicExtractionChartComponent;
  let fixture: ComponentFixture<TopicExtractionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicExtractionChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicExtractionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
