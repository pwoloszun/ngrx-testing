import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ntsMyRenderDelay]'
})
export class MyRenderDelayDirective implements OnDestroy {

  @Input()
  set ntsMyRenderDelay(time: number) {
    // TODO 1: clearTemplateContent
    // TODO 2: renderTemplateContent with delay
  }

  private timeoutId: any;

  constructor(
    private templateRef: TemplateRef<void>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnDestroy() {
    // TODO: clearTemplateContent
  }

}
