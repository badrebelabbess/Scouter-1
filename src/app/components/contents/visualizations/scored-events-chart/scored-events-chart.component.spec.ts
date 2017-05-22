import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoredEventsChartComponent } from './scored-events-chart.component';

describe('ScoredEventsChartComponent', () => {
  let component: ScoredEventsChartComponent;
  let fixture: ComponentFixture<ScoredEventsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoredEventsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoredEventsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
