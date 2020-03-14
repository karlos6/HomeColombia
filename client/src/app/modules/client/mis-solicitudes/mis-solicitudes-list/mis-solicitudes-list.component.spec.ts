import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisSolicitudesListComponent } from './mis-solicitudes-list.component';

describe('MisSolicitudesListComponent', () => {
  let component: MisSolicitudesListComponent;
  let fixture: ComponentFixture<MisSolicitudesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisSolicitudesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisSolicitudesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
