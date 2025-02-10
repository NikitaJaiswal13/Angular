import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../model/book.model';
import { CounterService } from '../../../shared/services/counter.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css',
  // providers : [BookService]
   //Provide Servce for this component
})

export class AllBooksComponent implements OnInit {

  private _pageTitle : string;

  public set pageTitle (value : string){
    this._pageTitle = value;
  }

  public get pageTitle(){
    return this._pageTitle;
  }

  public books: BookModel[] = [];

  constructor (public bookService : BookService ,  public _counterService : CounterService ) {

    //This will create new instance everytime it is called 
    //Therefore we use dependencies
    // var bookService = new BookService();
    // this.books = bookService.getBooks();
  }



  ngOnInit(): void {
    // this.books = this.bookService.getBooks();

    this.pageTitle = 'All Books'

    const allBooks= this.bookService.getBooks();

    allBooks.forEach(b => {
      var obj = new BookModel();
      obj.id = b.id;
      obj.author = b.author;
      obj.title = b.title;
      obj.totalPages = b.totalPages;
      obj.price = b.price;
      this.books.push(obj)
    })
    console.log(this.books)
    //This will not call getter and setter
  }

  public increase() : void {
    this._counterService.incCounter();
  } 
  public decrease() : void {
    this._counterService.decCounter();    
  } 
}
