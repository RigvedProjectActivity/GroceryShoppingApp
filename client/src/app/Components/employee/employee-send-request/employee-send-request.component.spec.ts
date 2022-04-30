import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSendRequestComponent } from './employee-send-request.component';

describe('EmployeeSendRequestComponent', () => {
  let component: EmployeeSendRequestComponent;
  let fixture: ComponentFixture<EmployeeSendRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSendRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
