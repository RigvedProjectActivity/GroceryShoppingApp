import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddProductsComponent } from './admin-add-products.component';

describe('AdminAddProductsComponent', () => {
  let component: AdminAddProductsComponent;
  let fixture: ComponentFixture<AdminAddProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
