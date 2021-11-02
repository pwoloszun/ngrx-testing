import { Directive, ElementRef, Input, OnDestroy, AfterViewInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ntsMyTooltip]',
})
export class MyTooltipDirective implements AfterViewInit, OnDestroy {

  @Input()
  ntsMyTooltip!: string;

  private isVisible = false;
  private tooltipEl: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ) {
  }

  ngAfterViewInit(): void {
    // TODO 1: render embeded view

    // TODO 2: get host DOM element

    // TODO 3: listen do click event on host DOM el
    // this.renderer.listen(hostDomEl, 'click', () => { ... });
  }

  ngOnDestroy(): void {
    this.renderer.destroy();
  }

  private renderTooltip(ev: MouseEvent) {
    // TODO
    // this.renderer.createElement
    // this.renderer.createText
    // this.renderer.setStyle
    // this.renderer.appendChild
  }

  private removeTooltip() {
    // TODO
    // this.renderer.removeChild
  }

  private getHostEl() {
    return this.templateRef.elementRef.nativeElement.previousElementSibling;
  }
}
