import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticulatMovieComponent } from './particulat-movie.component';

describe('ParticulatMovieComponent', () => {
  let component: ParticulatMovieComponent;
  let fixture: ComponentFixture<ParticulatMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticulatMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticulatMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
