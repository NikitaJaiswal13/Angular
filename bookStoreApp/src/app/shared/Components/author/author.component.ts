import { AfterContentChecked, AfterContentInit, Component, ContentChild, contentChild, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { TestService } from '../../services/test.service';
import { AuthorModel } from '../../models/author.model';
import { AuthorAddressComponent } from '../author-address/author-address.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit , OnChanges , DoCheck , AfterContentChecked , AfterContentInit , OnDestroy{
  // Using @Input

  // @Input() 
  // get data(){
  //   return this._data
  // }

  // set data(value : number){
  //   this._data = value + 1
  // }
  // private _data : number

  // Using Template reference 

  // public data : number;

  // public setdata(value : number) : void{
  //   this.data = value
  // }
  

  // @Input() showAuthor : boolean

  // Usig @Output and EventEmitter

  // @Output() myData = new EventEmitter<string>();

  // btnClicked() : void{

  //   // this.myData.emit('This text is from child component')

  //   this.testService.myData = "This text is from child component"
  // }
  // constructor(public testService : TestService) {};

  @Input() data:number
  @Input() data2 : boolean
  @Input() author : AuthorModel
  @ContentChild(AuthorAddressComponent)  authAddress :AuthorAddressComponent

  public childCounter : number= 0

 



  constructor() { 
    // console.log('This is child Constructor')
  }
  ngOnDestroy(): void {
    console.log("Author Component Destroy")
  }

  ngAfterContentInit(): void {
    console.log("Content Init " + this.authAddress?.address)
  }

  ngAfterContentChecked(): void {
    console.log("Content Checked " + this.authAddress?.address)
  }

 

  ngOnInit(): void {
    // console.log('This is Child OnInIt')
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes)
  }

  ngDoCheck(): void {
    //console.log(this.author)
  }

  public increaseCounter(): void {
    this.childCounter++;
  }


}
