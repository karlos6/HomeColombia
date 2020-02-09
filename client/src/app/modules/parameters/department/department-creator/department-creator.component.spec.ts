import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCreatorComponent } from './department-creator.component';

describe('DepartmentCreatorComponent', () => {
  let component: DepartmentCreatorComponent;
  let fixture: ComponentFixture<DepartmentCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
