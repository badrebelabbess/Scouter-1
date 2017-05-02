import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventfulFormComponent } from './eventful-form.component';

describe('EventfulFormComponent', () => {
  let component: EventfulFormComponent;
  let fixture: ComponentFixture<EventfulFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventfulFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventfulFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
