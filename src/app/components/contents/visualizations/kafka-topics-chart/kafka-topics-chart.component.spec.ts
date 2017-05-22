import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KafkaTopicsChartComponent } from './kafka-topics-chart.component';

describe('KafkaTopicsChartComponent', () => {
  let component: KafkaTopicsChartComponent;
  let fixture: ComponentFixture<KafkaTopicsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KafkaTopicsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KafkaTopicsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
