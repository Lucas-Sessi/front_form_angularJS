import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGetComponent } from './book-get-component.component';

describe('BookGetComponentComponent', () => {
  let component: BookGetComponent;
  let fixture: ComponentFixture<BookGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookGetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
