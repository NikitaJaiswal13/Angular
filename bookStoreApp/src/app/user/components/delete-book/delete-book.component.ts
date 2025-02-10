import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.css'
})
export class DeleteBookComponent implements OnInit {

  userId  : string = '';
  constructor(private routes : ActivatedRoute){ };
  
  ngOnInit(): void {
    this.routes.parent?.params.subscribe((params)=>{
      console.log(params)
      this.userId = params['userId'];
    })
  }
}
