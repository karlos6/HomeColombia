import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAsesorComponent } from './set-asesor.component';

describe('SetAsesorComponent', () => {
  let component: SetAsesorComponent;
  let fixture: ComponentFixture<SetAsesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAsesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
