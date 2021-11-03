import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef, OnDestroy, Type, ChangeDetectorRef } from '@angular/core';
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
  @ViewChild('discountsCont', { read: ViewContainerRef })
  private discountsCont!: ViewContainerRef;

  private intervalId: any;

  constructor(
    private cd: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadDiscount();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  loadDiscount() {
    let index = 0;
    this.intervalId = setInterval(() => {
      if (!this.discounts) {
        return;
      }
      index = (index + 1) % this.discounts.length;
      const { componentClass, inputValues } = this.discounts[index];

      const comFactory = this.resolver.resolveComponentFactory(componentClass);

      this.discountsCont.clear();
      const comppRef = this.discountsCont.createComponent(comFactory);
      const compInstance = comppRef.instance;

      for (const key in inputValues) {
        const value = inputValues[key];
        (compInstance as any)[key] = value;
      }
    }, 2000);
  }

}
