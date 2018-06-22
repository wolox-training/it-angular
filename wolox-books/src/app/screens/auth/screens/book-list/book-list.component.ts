import { Component, OnInit } from '@angular/core';
import { BookListService } from '../../../../services/book-list.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: any;
  constructor(private booksService: BookListService) { }

  ngOnInit() {
    let books = this.booksService.getBooks().subscribe(books => (this.books = books));
  }

}
