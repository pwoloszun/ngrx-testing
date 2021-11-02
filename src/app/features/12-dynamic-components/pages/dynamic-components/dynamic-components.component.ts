import { Component, OnInit } from '@angular/core';

import { DiscountItem } from '../../components/discount-banner/discount-banner.component';
import { RegularCustomerDiscountComponent } from '../../components/regular-customer-discount/regular-customer-discount.component';
import { TimeRangeDiscountComponent } from '../../components/time-range-discount/time-range-discount.component';
import { VipDiscountComponent } from '../../components/vip-discount/vip-discount.component';

const weekInMs = 7 * 24 * 3600000;

@Component({
  selector: 'nts-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.css']
})
export class DynamicComponentsComponent implements OnInit {

  discountItems = [
    new DiscountItem(RegularCustomerDiscountComponent, { percentage: 7 }),
    new DiscountItem(TimeRangeDiscountComponent, {
      value: 25,
      startDt: Date.now() - weekInMs,
      endDt: Date.now() + weekInMs,
    }),
    new DiscountItem(VipDiscountComponent, { value: 99, percentage: 50 }),
  ];

  ngOnInit() { }
}
