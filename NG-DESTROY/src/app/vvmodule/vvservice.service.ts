import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VvserviceService {
  counterChanged = new Subject<number>();
  private counter: number = 0;

  constructor() { }

  getCounter() {
    return this.counter;
  }

  incrementCounter() {
    this.counter = this.counter + 1;
    this.counterChanged.next(this.counter);
  }
}
