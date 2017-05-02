import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworksFormComponent } from './social-networks-form.component';

describe('SocialNetworksFormComponent', () => {
  let component: SocialNetworksFormComponent;
  let fixture: ComponentFixture<SocialNetworksFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworksFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
