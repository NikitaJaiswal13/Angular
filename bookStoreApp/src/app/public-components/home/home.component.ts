import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, inject, OnDestroy, OnInit, ViewChild, viewChild } from '@angular/core';
import { CounterService } from '../../shared/services/counter.service';
import { AuthorComponent } from '../../shared/Components/author/author.component';
import { MatButton } from '@angular/material/button';
import { TestService } from '../../shared/services/test.service';
import { AuthorModel } from '../../shared/models/author.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit , AfterViewInit , AfterViewChecked , OnDestroy{


  // public counter : number = 0;
  
  // @ViewChild (AuthorComponent) private childComp : AuthorComponent
  // Title: any;
  // @ViewChild('authors') private childComp : AuthorComponent
  // @ViewChild('decButton') private decButton : MatButton
  // @ViewChild('title') private Title: ElementRef



  // ngAfterViewInit(): void {
  //   setTimeout(() =>{
  //     this.childComp.setdata(1);
  //     this.decButton.disabled = false
  //     this.decButton.color = 'primary'
  //     this.Title.nativeElement.innerHTML = 'This is Updated Title'   
  //   } , 0)
  // }


  // Relationship by service 

  // public childData($event : any) : void{
  //   console.log($event)
  // }


  // constructor(public _counterService: CounterService , 
  //   @Inject('appTitle') public config : any
  // ) {}

  private intervalId : any

  public obj : AuthorModel= {id : 1, name : 'Nikita'}
  @ViewChild('btnCounter') btnCounter : ElementRef


  constructor(public testservice : TestService) {
    // console.log('This is Parent Constructor')

  }
  ngOnDestroy(): void {
    console.log("Home Component Destroy")
    clearInterval(this.intervalId);
  }
  ngAfterViewChecked(): void {
    console.log(this.authcomp.childCounter)
  }
  ngAfterViewInit(): void {
    console.log(this.btnCounter)
    this.btnCounter.nativeElement.innerHTML = 'btnCounter'
  }

  ngOnInit(): void {
    // console.log('This is Parent OnInIt')
    this.timer()

  }


  // public increase() : void {
  //   this._counterService.incCounter();
  // } 
  // public decrease() : void {
  //   this._counterService.decCounter();    
  // } 

  public count : number = 0
  public sach : boolean = true
  public address : string = 'India'
  public count1 : number = 0;
  @ViewChild(AuthorComponent) authcomp : AuthorComponent

  public counter() : void{
    this.count++;
    this.sach = !this.sach
    this.obj.id = this.count
    this.address = this.address + this.count
  }

  timer() : void{
    this.intervalId = setInterval(() =>{
      this.count1++;
    } , 1000)
  }


}
