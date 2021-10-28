import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ntsMyRenderDelay]'
})
export class MyRenderDelayDirective implements OnDestroy {

  @Input()
  set ntsMyRenderDelay(time: number) {
    // console.log('MyRenderDelayDirective input [ntsMyRenderDelay]', time);
    this.clearTemplateContent();
    this.renderTemplateContent(time);
  }

  private timeoutId: any;

  constructor(
    private templateRef: TemplateRef<void>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnDestroy() {
    // console.log('MyRenderDelayDirective destroy:');
    this.clearTemplateContent();
  }

  private renderTemplateContent(time: number) {
    this.timeoutId = setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, time);
  }

  private clearTemplateContent() {
    clearTimeout(this.timeoutId);
    this.viewContainerRef.clear();
  }
}
