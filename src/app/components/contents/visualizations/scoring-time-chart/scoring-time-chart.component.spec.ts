import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringTimeChartComponent } from './scoring-time-chart.component';

describe('ScoringTimeChartComponent', () => {
  let component: ScoringTimeChartComponent;
  let fixture: ComponentFixture<ScoringTimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoringTimeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
