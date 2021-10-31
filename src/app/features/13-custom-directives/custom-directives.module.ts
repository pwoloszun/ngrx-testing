import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { CustomDirectivesRoutingModule } from './custom-directives-routing.module';
import { CustomDirectivesComponent } from './pages/custom-directives/custom-directives.component';
import { MyIfDirective } from './directives/my-if.directive';
import { MyForDirective } from './directives/my-for.directive';
import { MyHighlightDirective } from './directives/my-highlight.directive';
import { MyTooltipDirective } from './directives/my-tooltip.directive';
import { MyRenderDelayDirective } from './directives/my-render-delay.directive';

@NgModule({
  declarations: [
    CustomDirectivesComponent,
    MyIfDirective,
    MyForDirective,
    MyHighlightDirective,
    MyTooltipDirective,
    MyRenderDelayDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomDirectivesRoutingModule
  ]
})
export class CustomDirectivesModule {
}
