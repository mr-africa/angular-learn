import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsButtonComponent } from './add-news-button.component';

describe('AddNewsButtonComponent', () => {
  let component: AddNewsButtonComponent;
  let fixture: ComponentFixture<AddNewsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
