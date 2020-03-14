import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviserEditorComponent } from './adviser-editor.component';

describe('AdviserEditorComponent', () => {
  let component: AdviserEditorComponent;
  let fixture: ComponentFixture<AdviserEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviserEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviserEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
