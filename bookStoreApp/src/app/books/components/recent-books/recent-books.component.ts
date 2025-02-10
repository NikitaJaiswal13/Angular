import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../model/book.model';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrl: './recent-books.component.css'
})
export class RecentBooksComponent implements OnInit{


  public recentBooks : BookModel[] = [];
  constructor (private _booksService : BookService){ }

  ngOnInit(): void {
    this.getRecentBooks();
    
  }

  private getRecentBooks() : void {
    this.recentBooks = this._booksService.recentBooks();
  }
}


