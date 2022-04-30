import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteProductsComponent } from './admin-delete-products.component';

describe('AdminDeleteProductsComponent', () => {
  let component: AdminDeleteProductsComponent;
  let fixture: ComponentFixture<AdminDeleteProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
