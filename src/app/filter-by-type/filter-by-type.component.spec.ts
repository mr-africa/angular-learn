import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByTypeComponent } from './filter-by-type.component';

describe('FilterByTypeComponent', () => {
  let component: FilterByTypeComponent;
  let fixture: ComponentFixture<FilterByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
