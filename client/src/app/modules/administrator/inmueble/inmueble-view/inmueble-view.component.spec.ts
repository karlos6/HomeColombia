import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleViewComponent } from './inmueble-view.component';

describe('InmuebleViewComponent', () => {
  let component: InmuebleViewComponent;
  let fixture: ComponentFixture<InmuebleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmuebleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmuebleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
