import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageSignInFormComponent } from './admin-page-sign-in-form.component';

describe('AdminPageSignInFormComponent', () => {
  let component: AdminPageSignInFormComponent;
  let fixture: ComponentFixture<AdminPageSignInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageSignInFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageSignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
