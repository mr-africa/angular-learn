import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEventComponent } from './transaction-event.component';

describe('TransactionEventComponent', () => {
  let component: TransactionEventComponent;
  let fixture: ComponentFixture<TransactionEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
