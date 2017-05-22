import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryUsageChartComponent } from './memory-usage-chart.component';

describe('MemoryUsageChartComponent', () => {
  let component: MemoryUsageChartComponent;
  let fixture: ComponentFixture<MemoryUsageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryUsageChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryUsageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
