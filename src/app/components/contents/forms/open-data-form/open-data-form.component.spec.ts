import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDataFormComponent } from './open-data-form.component';

describe('OpenDataFormComponent', () => {
  let component: OpenDataFormComponent;
  let fixture: ComponentFixture<OpenDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
