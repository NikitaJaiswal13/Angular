import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../model/book.model';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrl: './add-new-book.component.css'
})
export class AddNewBookComponent implements OnInit , AfterViewChecked{

  // @ViewChild("myForms") myForms = ElementRef

  constructor( private _bookService : BookService) {}

  ngAfterViewChecked(): void {
    // console.log(this.myForms)
  }

  ngOnInit(): void { }

  saveBook(value : any) : void{
    console.log(value)
    const book : BookModel = new BookModel()
    book.title = value.title;
    book.author = value.author;
    book.price = value.price
    book.totalPages = value.pages
    this._bookService.addBook(value)
  }
}
