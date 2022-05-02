import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockUsersComponent } from './unlock-users.component';

describe('UnlockUsersComponent', () => {
  let component: UnlockUsersComponent;
  let fixture: ComponentFixture<UnlockUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlockUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
