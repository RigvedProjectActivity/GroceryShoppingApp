import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSiginSignUpTicketFormComponent } from './user-sigin-sign-up-ticket-form.component';

describe('UserSiginSignUpTicketFormComponent', () => {
  let component: UserSiginSignUpTicketFormComponent;
  let fixture: ComponentFixture<UserSiginSignUpTicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSiginSignUpTicketFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSiginSignUpTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
