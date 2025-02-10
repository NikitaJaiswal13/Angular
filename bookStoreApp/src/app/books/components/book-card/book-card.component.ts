import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../model/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent implements OnInit{

  @Input() 
  get books() : BookModel[]{
    return this._books ;
  }
  set books(value : BookModel[]){ 
    value.forEach(b=>{
      b.title = 'Title: ' + b.title
    })
    this._books =  value;
  }

  private _books : BookModel[];

  constructor () {}

  ngOnInit(): void {}
}
