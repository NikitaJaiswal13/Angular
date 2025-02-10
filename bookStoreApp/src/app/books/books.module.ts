import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './books-routing.module';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './books.component';
import { BookService } from './services/book.service';
import { SharedModule } from '../shared/shared.module';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BooksComponent,
    RecentBooksComponent,
    BookCardComponent,
    AddNewBookComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [BookService] 
  //Provide Servce between 2 component

})
export class BooksModule { }
