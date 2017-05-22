import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryNonUsageChartComponent } from './memory-non-usage-chart.component';

describe('MemoryNonUsageChartComponent', () => {
  let component: MemoryNonUsageChartComponent;
  let fixture: ComponentFixture<MemoryNonUsageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryNonUsageChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryNonUsageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
