import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaccountsComponent } from './listaccounts.component';

describe('ListaccountsComponent', () => {
  let component: ListaccountsComponent;
  let fixture: ComponentFixture<ListaccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaccountsComponent]
    });
    fixture = TestBed.createComponent(ListaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
