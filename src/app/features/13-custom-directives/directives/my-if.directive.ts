import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ntsMyIf]'
})
export class MyIfDirective {

  @Input()
  set ntsMyIf(value: boolean) {
    // TODO render embedded view OR clear embeded view
  }

  private isViewEmbedded = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
  }

}
