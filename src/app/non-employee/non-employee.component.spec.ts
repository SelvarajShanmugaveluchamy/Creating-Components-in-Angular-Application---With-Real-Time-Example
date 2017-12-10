import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonEmployeeComponent } from './non-employee.component';

describe('NonEmployeeComponent', () => {
  let component: NonEmployeeComponent;
  let fixture: ComponentFixture<NonEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
