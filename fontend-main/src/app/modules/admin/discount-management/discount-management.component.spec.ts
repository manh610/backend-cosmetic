import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountManagementComponent } from './discount-management.component';

describe('DiscountManagementComponent', () => {
  let component: DiscountManagementComponent;
  let fixture: ComponentFixture<DiscountManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountManagementComponent]
    });
    fixture = TestBed.createComponent(DiscountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
