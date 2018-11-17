import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddRecommeneddComponent } from './dialog-add-recommenedd.component';

describe('DialogAddRecommeneddComponent', () => {
  let component: DialogAddRecommeneddComponent;
  let fixture: ComponentFixture<DialogAddRecommeneddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddRecommeneddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddRecommeneddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
