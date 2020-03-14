import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviserCreatorComponent } from './adviser-creator.component';

describe('AdviserCreatorComponent', () => {
  let component: AdviserCreatorComponent;
  let fixture: ComponentFixture<AdviserCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviserCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviserCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
