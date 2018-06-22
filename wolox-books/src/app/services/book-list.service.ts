import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  BOOKS_URL: string = 'https://wbooks-api-stage.herokuapp.com/api/v1/books';
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(this.BOOKS_URL);
  }
}
