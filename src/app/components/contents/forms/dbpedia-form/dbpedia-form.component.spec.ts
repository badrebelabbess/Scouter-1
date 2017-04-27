import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbpediaFormComponent } from './dbpedia-form.component';

describe('DbpediaFormComponent', () => {
  let component: DbpediaFormComponent;
  let fixture: ComponentFixture<DbpediaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbpediaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbpediaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
