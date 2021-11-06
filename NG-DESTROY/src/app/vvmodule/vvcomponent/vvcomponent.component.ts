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
  subscription!: Subscription;

  constructor(private counterService: VvserviceService) { }

  increment(): void {
    this.counterService.incrementCounter();
  }

  ngOnInit(): void {
    this.subscription = this.counterService.counterChanged.subscribe(counter => this.counter = counter);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
