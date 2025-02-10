import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';

const routes: Routes = [
  {path : '' , component : AllBooksComponent},
  {path : 'recent' , component : RecentBooksComponent},
  {path: 'new' , component : AddNewBookComponent},
  {path : ':id' , component : BookDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
