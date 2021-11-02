import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef, OnDestroy, Type } from '@angular/core';
import { forEach } from 'lodash';
import { Discount } from '../discount';

export class DiscountItem {
  constructor(
    public componentClass: Type<Discount>,
    public inputValues: any
  ) {
  }
}

@Component({
  selector: 'nts-discount-banner',
  templateUrl: './discount-banner.component.html',
  styleUrls: ['./discount-banner.component.css']
})
export class DiscountBannerComponent implements OnInit, OnDestroy {

  @Input() discounts!: DiscountItem[];

  // TODO

  private intervalId: any;

  constructor() { }

  ngOnInit() {
    this.loadDiscount();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  loadDiscount() {
    let index = 0;
    this.intervalId = setInterval(() => {
      // TODO
      console.log('loadDiscounts TODO');
    }, 2000);
  }

}
