import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'date-fns';
import { BooksService } from '../../../services/books';


interface Book {
  title: string;
  author: string;
  price: number;
  publicationDate: string;
  tags: string[];
}

@Component({
  selector: 'app-book-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-update.component.html',
  styleUrl: './book-update.component.css'
})
export class BookUpdateComponent implements OnInit {
  book: Book = {
    title: '',
    author: '',
    price: 0,
    publicationDate: '',
    tags: [],
  };

  bookIdForm: number = 0;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const bookId = params['id'];

      if(bookId) {
        this.bookIdForm = bookId;
        this.booksService.findOneData(bookId).subscribe({
          next: (data) => {
            this.book = {
              title: data.title,
              author: data.author,
              price: data.price,
              publicationDate: format(data.publicationDate, 'yyyy-MM-dd'),
              tags: data.tags,
            };
          },
          error: (error) => {
            console.error('Erro ao carregar livro', error);
          }
        })
      }
    })
  }

  submitForm(): void {
    this.book.price = Number(this.book.price);
    this.booksService.putData(this.bookIdForm, this.book).subscribe({
      next: (data) => {
        this.router.navigate(['/books'])
      },
      error: (error) => {
        console.error('Erro ao atualizar livro', error);
      }
    })
  }
}
