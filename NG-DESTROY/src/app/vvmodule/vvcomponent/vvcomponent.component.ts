import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VvserviceService } from '../vvservice.service';

@Component({
  selector: 'app-vvcomponent',
  templateUrl: './vvcomponent.component.html',
  styleUrls: ['./vvcomponent.component.scss']
})
export class VvcomponentComponent implements OnInit, OnDestroy {
  counter!: number;
  //1) Declare a subscription object
  subscription!: Subscription;

  constructor(private counterService: VvserviceService) { }

  increment(): void {
    this.counterService.incrementCounter();
  }

  ngOnInit(): void {
    //2) Store your service observable in your Subscriprion object
    this.subscription = this.counterService.counterChanged.subscribe(counter => this.counter = counter);
  }

  ngOnDestroy(): void {
    //3) Unsubscribe on destroy to avoid memory leaks
    this.subscription.unsubscribe();
  }
}
