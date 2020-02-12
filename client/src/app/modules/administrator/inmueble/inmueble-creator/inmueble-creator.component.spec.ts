import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleCreatorComponent } from './inmueble-creator.component';

describe('InmuebleCreatorComponent', () => {
  let component: InmuebleCreatorComponent;
  let fixture: ComponentFixture<InmuebleCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmuebleCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmuebleCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
