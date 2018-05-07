import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPositiveTransactionButtonComponent } from './add-positive-transaction-button.component';

describe('AddPositiveTransactionButtonComponent', () => {
  let component: AddPositiveTransactionButtonComponent;
  let fixture: ComponentFixture<AddPositiveTransactionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPositiveTransactionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPositiveTransactionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
