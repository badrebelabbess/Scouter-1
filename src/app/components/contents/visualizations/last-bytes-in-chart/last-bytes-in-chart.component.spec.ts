import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastBytesInChartComponent } from './last-bytes-in-chart.component';

describe('LastBytesInChartComponent', () => {
  let component: LastBytesInChartComponent;
  let fixture: ComponentFixture<LastBytesInChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastBytesInChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastBytesInChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
