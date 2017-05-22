import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KafkaUptimeChartComponent } from './kafka-uptime-chart.component';

describe('KafkaUptimeChartComponent', () => {
  let component: KafkaUptimeChartComponent;
  let fixture: ComponentFixture<KafkaUptimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KafkaUptimeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KafkaUptimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
