import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleResultComponent } from './console-result.component';

describe('ConsoleResultComponent', () => {
  let component: ConsoleResultComponent;
  let fixture: ComponentFixture<ConsoleResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
