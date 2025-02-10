import { Injectable } from '@angular/core';

@Injectable(
  // {
  // providedIn: 'any'
  // As lazy loading is being used each module will have seperate service
// }
)
export class CounterService {
  public counter : number = 0;
  constructor() { }

  public incCounter() : void {
  this.counter++;
  }

  public decCounter() : void {

    this.counter--;
  }


}
