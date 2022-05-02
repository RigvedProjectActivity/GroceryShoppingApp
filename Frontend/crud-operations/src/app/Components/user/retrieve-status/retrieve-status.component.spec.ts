import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveStatusComponent } from './retrieve-status.component';

describe('RetrieveStatusComponent', () => {
  let component: RetrieveStatusComponent;
  let fixture: ComponentFixture<RetrieveStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
