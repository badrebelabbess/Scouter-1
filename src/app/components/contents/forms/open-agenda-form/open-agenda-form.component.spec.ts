import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAgendaFormComponent } from './open-agenda-form.component';

describe('OpenAgendaFormComponent', () => {
  let component: OpenAgendaFormComponent;
  let fixture: ComponentFixture<OpenAgendaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenAgendaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenAgendaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
