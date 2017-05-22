import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryTimeChartComponent } from './query-time-chart.component';

describe('QueryTimeChartComponent', () => {
  let component: QueryTimeChartComponent;
  let fixture: ComponentFixture<QueryTimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryTimeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
