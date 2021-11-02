import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, TemplateRef, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { MySimpleBoxComponent } from '../my-simple-box/my-simple-box.component';

interface MyTmplContext {
  $implicit: string;
  firstName: string;
  currentAge: number;
}

@Component({
  selector: 'nts-my-simple-container',
  templateUrl: './my-simple-container.component.html',
  styleUrls: ['./my-simple-container.component.css']
})
export class MySimpleContainerComponent implements OnInit, AfterViewInit {

  // TODO
  firstCont!: ViewContainerRef;
  // TODO
  secondCont!: ViewContainerRef;
  // TODO
  myTmpl!: TemplateRef<any>;

  constructor(
    private cd: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.createHostViewUsingComponent();
    // this.createEmbededViewUsingTemplate();

    // TODO
  }

  private createEmbededViewUsingTemplate() {
    // const tmplContext = {
    //   $implicit: `my implicit val`,
    //   firstName: `bob`,
    //   currentAge: 123,
    // };

    // TODO: viewCont.createEmbeddedView
  }

  private createHostViewUsingComponent() {
    // TODO 1a: resolveComponentFactory
    // TODO 1b: viewCont.createComponent

    // TODO 2: pass input props
  }

}
