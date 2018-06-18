import { Component, OnInit } from '@angular/core';
import { BookListService } from '../../../../services/book-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: any;
  constructor(
    private booksService: BookListService,
    private router: Router
  ) { }

  ngOnInit() {
    let books = this.booksService.getBooks().subscribe(books => (this.books = books));
  }

  bookGo(id: number) {
    this.router.navigateByUrl(`/books/${id}`);
  }

}
