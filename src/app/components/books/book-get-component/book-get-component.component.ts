import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksService } from '../../../services/books';

@Component({
  selector: 'app-book-get-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-get-component.component.html',
  styleUrl: './book-get-component.component.css'
})
export class BookGetComponent implements OnInit {
  books$: Observable<any[]>;
  books: any[] = [];
  isLoading: boolean = true;
  
  constructor(
    private booksService: BooksService,
    private router: Router,
  ) {
    this.books$ = new Observable<any[]>();
  }

  
  async ngOnInit() {
      this.books$ = this.booksService.getData();
      this.books$.subscribe({
        next: (data) => {
          this.books = data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Erro ao carregar dados', error);
        }
      })
  }

  createBook() {
    this.router.navigate(['/books/create']);
  }

  updateBook(id: number) {
    this.router.navigate(['/books/edit', id]);
  }

  deleteBook(id: number) {
    this.booksService.deleteData(id).subscribe({
      next: (data) => {
        this.books = this.books.filter((book) => book.id !== id);
      },
      error: (error) => {
        console.error('Erro ao deletar livro', error);
      }
    });
  }
}
