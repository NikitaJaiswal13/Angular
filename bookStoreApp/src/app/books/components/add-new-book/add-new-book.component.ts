import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../model/book.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrl: './add-new-book.component.css'
})
export class AddNewBookComponent implements OnInit , AfterViewChecked{

  // @ViewChild("myForms") myForms = ElementRef
  @ViewChild("myForms") myForms : NgForm

  constructor( private _bookService : BookService) {}

  ngAfterViewChecked(): void {
    // console.log(this.myForms)
  }

  public model : BookModel;

  ngOnInit(): void { 
    this.model = new BookModel;
   // this.model.title = 'Book',
    this.model.totalPages = 200;
    this.model.price ={
      currency : 'IND' , 
      value : 100
    },
    this.model.isPublished = true
  }

  prices: any[] = [
    {value: 100, viewValue: '$ 100'},
    {value: 200, viewValue: '$ 200'},
    {value: 300, viewValue: '$ 300'},
  ];

  saveBook(): void {
    console.log(this.model);
    // const book: BookModel = new BookModel();
    // book.title = value.title;
    // book.author = value.author;
    // book.totalPages = value.pages;
    // book.isPublished = value.isPublished
    // book.publishedOn = value.publishedOn
    // book.price = {
    //   currency: 'INR',
    //   value: value.price
    // };


    if(this.myForms.valid){

      this._bookService.addBook(this.model);
    }else{
      alert("Invalid Data")
    }
  }
  
}
