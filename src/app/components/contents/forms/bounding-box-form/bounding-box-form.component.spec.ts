import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundingBoxFormComponent } from './bounding-box-form.component';

describe('BoundingBoxFormComponent', () => {
  let component: BoundingBoxFormComponent;
  let fixture: ComponentFixture<BoundingBoxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoundingBoxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundingBoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
