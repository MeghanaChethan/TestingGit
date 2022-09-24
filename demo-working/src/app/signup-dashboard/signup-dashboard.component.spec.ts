import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDashboardComponent } from './signup-dashboard.component';

describe('SignupDashboardComponent', () => {
  let component: SignupDashboardComponent;
  let fixture: ComponentFixture<SignupDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
