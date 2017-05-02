import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsFormComponent } from './keywords-form.component';

describe('KeywordsFormComponent', () => {
  let component: KeywordsFormComponent;
  let fixture: ComponentFixture<KeywordsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
