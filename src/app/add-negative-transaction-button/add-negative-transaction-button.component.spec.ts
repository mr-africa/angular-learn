import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNegativeTransactionButtonComponent } from './add-negative-transaction-button.component';

describe('AddNegativeTransactionButtonComponent', () => {
  let component: AddNegativeTransactionButtonComponent;
  let fixture: ComponentFixture<AddNegativeTransactionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNegativeTransactionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNegativeTransactionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
