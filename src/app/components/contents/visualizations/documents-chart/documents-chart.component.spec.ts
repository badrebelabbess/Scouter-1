import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsChartComponent } from './documents-chart.component';

describe('DocumentsChartComponent', () => {
  let component: DocumentsChartComponent;
  let fixture: ComponentFixture<DocumentsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
