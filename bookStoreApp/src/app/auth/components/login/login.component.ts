import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  name : string = '';
  email : string = '';

  constructor(private route : ActivatedRoute , private router : Router) {};

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams)=>{
      console.log(queryParams)
      this.email = queryParams['email'];
      this.name = queryParams['name'];
    })
  }

  public gotoSignup() : void {
    this.router.navigate(['auth/signup']);
  }

  public gotoBookDetails() : void {
    this.router.navigate(['public/book-details' , 100 , 'author' ,102] , {queryParams : {bookName : 'A Good Girl Guides To Murder' , Book : 'Verity'}});
  }
}
