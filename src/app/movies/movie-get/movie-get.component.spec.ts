import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGetComponent } from './movie-get.component';

describe('MovieGetComponent', () => {
  let component: MovieGetComponent;
  let fixture: ComponentFixture<MovieGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieGetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
