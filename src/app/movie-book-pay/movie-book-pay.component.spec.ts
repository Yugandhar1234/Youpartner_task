import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBookPayComponent } from './movie-book-pay.component';

describe('MovieBookPayComponent', () => {
  let component: MovieBookPayComponent;
  let fixture: ComponentFixture<MovieBookPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieBookPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieBookPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
