import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

interface MyForContext {
  $implicit: any;
  myIndex: number;
}

@Directive({
  selector: '[ntsMyFor]'
})
export class MyForDirective {

  @Input()
  set ntsMyForOf(items: any[]) {
    // TODO 1: clear viewCont

    // TODO 2: create embedded view, using template for each item
  }

  constructor(
    private templateRef: TemplateRef<MyForContext>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
