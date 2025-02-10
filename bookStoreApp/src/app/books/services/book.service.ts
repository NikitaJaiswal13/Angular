import { Injectable } from '@angular/core';
import { BookModel } from '../model/book.model';

@Injectable({
  providedIn: 'root'
  // Provide service for entire application
})
export class BookService {

  private allBooks  = [{
    id: 1,
    title: "The Pragmatic Programmer",
    totalPages: 352,
    author: "Andrew Hunt & David Thomas",
    price: {
      currency: "INR",
      value: 3299
    }
  },
  {
    id: 2,
    title: "Clean Code",
    totalPages: 464,
    author: "Robert C. Martin",
    price: {
      currency: "INR",
      value: 3799
    }
  },
  {
    id: 3,
    title: "You Don't Know JS",
    totalPages: 278,
    author: "Kyle Simpson",
    price: {
      currency: "INR",
      value: 1999
    }
  },
  {
    id: 4,
    title: "Eloquent JavaScript",
    totalPages: 472,
    author: "Marijn Haverbeke",
    price: {
      currency: "INR",
      value: 2499
    }
  },
  {
    id: 5,
    title: "Design Patterns",
    totalPages: 395,
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    price: {
      currency: "INR",
      value: 4599
    }
  },
  {
    id: 3,
    title: "You Don't Know JS",
    totalPages: 278,
    author: "Kyle Simpson",
    price: {
      currency: "INR",
      value: 1999
    }
  },
  {
    id: 4,
    title: "Eloquent JavaScript",
    totalPages: 472,
    author: "Marijn Haverbeke",
    price: {
      currency: "INR",
      value: 2499
    }
  },
  {
    id: 5,
    title: "Design Patterns",
    totalPages: 395,
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    price: {
      currency: "INR",
      value: 4599
    }
  },
  {
    id: 5,
    title: "Design Patterns",
    totalPages: 395,
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    price: {
      currency: "INR",
      value: 4599
    }
  }]

  constructor() { }

  public addBook(bookModel : BookModel ) : void{
    this.allBooks.push(bookModel)
  }

  public getBooks() : any[] {
    return  this.allBooks
    }

    public recentBooks() : any[] {
      return  [ {
        id: 1,
        title: "The Pragmatic Programmer",
        totalPages: 352,
        author: "Andrew Hunt & David Thomas",
        price: {
          currency: "INR",
          value: 3299
        }
      },
      {
        id: 2,
        title: "Clean Code",
        totalPages: 464,
        author: "Robert C. Martin",
        price: {
          currency: "INR",
          value: 3799
        }
      }
    ]
      }
}
