import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavoritesWorkerComponent } from './list-favorites-worker.component';

describe('ListFavoritesWorkerComponent', () => {
  let component: ListFavoritesWorkerComponent;
  let fixture: ComponentFixture<ListFavoritesWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFavoritesWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFavoritesWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
