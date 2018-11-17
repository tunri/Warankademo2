import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavoriteDetailComponent } from './list-favorite-detail.component';

describe('ListFavoriteDetailComponent', () => {
  let component: ListFavoriteDetailComponent;
  let fixture: ComponentFixture<ListFavoriteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFavoriteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFavoriteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
