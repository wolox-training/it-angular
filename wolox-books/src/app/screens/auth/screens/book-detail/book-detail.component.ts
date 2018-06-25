import { Component, OnInit } from '@angular/core';
import { BookListService } from '../../../../services/book-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookListService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.book = this.bookService.getBook(params.id);
    });
  }

}
