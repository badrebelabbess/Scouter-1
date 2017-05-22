import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastBytesOutChartComponent } from './last-bytes-out-chart.component';

describe('LastBytesOutChartComponent', () => {
  let component: LastBytesOutChartComponent;
  let fixture: ComponentFixture<LastBytesOutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastBytesOutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastBytesOutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
