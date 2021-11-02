import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentsRoutingModule } from './dynamic-components-routing.module';
import { DynamicComponentsComponent } from './pages/dynamic-components/dynamic-components.component';
import { SharedModule } from '../../shared/shared.module';
import { TimeRangeDiscountComponent } from './components/time-range-discount/time-range-discount.component';
import { RegularCustomerDiscountComponent } from './components/regular-customer-discount/regular-customer-discount.component';
import { VipDiscountComponent } from './components/vip-discount/vip-discount.component';
import { MySimpleContainerComponent } from './components/my-simple-container/my-simple-container.component';
import { MySimpleBoxComponent } from './components/my-simple-box/my-simple-box.component';
import { DiscountBannerComponent } from './components/discount-banner/discount-banner.component';


@NgModule({
  declarations: [
    DynamicComponentsComponent,
    // dynamic components declarations
    TimeRangeDiscountComponent,
    RegularCustomerDiscountComponent,
    VipDiscountComponent,
    MySimpleContainerComponent,
    MySimpleBoxComponent,
    DiscountBannerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DynamicComponentsRoutingModule
  ],
  entryComponents: [
    // create factories for dynamic components
    // TODO
  ],
})
export class DynamicComponentsModule {
}
