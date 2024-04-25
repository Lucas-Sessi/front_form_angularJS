import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../../../services/books';

interface Book {
  title: string;
  author: string;
  price: number;
  publicationDate: string;
  tags: string[];
}


@Component({
  selector: 'app-book-create-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-create-component.component.html',
  styleUrl: './book-create-component.component.css'
})

export class BookCreateComponent {
    book: Book = {
      title: '',
      author: '',
      price: 0,
      publicationDate: '',
      tags: [],
    };
  
  constructor(
    private booksService: BooksService,
    private router: Router,
  ) {}

  submitForm(): void {
    this.booksService.postData(this.book).subscribe({
      next: (data) => {
        console.log("🚀 ~ BookCreateComponent ~ this.booksService.postData ~ data:", data)
        this.router.navigate(['/books']);

        this.book.title = '';
        this.book.author = '';
        this.book.price = 0;
        this.book.publicationDate = '';
        this.book.tags = [];
      },
      error: (error) => {
        console.error('Erro ao criar livro', error);
      }
    });
  }
}
