import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageSignInComponent } from './admin-page-sign-in.component';

describe('AdminPageSignInComponent', () => {
  let component: AdminPageSignInComponent;
  let fixture: ComponentFixture<AdminPageSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
