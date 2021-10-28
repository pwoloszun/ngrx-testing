import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[ntsMyHighlight]'
})
export class MyHighlightDirective {

  @Input()
  ntsMyHighlight!: string;

  @HostListener('mouseenter')
  mouseEnterHandler() {
    this.setBgColor(this.ntsMyHighlight || '#f00');
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeaveHandler(event: any) {
    // console.log('mouseLeaveHandler event:', event);
    this.setBgColor(null);
  }

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {
  }

  private setBgColor(value: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', value);
  }

}
