import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwmFormComponent } from './owm-form.component';

describe('OwmFormComponent', () => {
  let component: OwmFormComponent;
  let fixture: ComponentFixture<OwmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwmFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
