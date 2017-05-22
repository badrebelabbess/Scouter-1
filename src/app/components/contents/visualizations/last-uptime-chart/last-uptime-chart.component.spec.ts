import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastUptimeChartComponent } from './last-uptime-chart.component';

describe('LastUptimeChartComponent', () => {
  let component: LastUptimeChartComponent;
  let fixture: ComponentFixture<LastUptimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastUptimeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastUptimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
