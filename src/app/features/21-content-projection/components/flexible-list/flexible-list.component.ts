import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

interface TmplContext {
  item: any;
}

@Component({
  selector: 'nts-flexible-list',
  templateUrl: './flexible-list.component.html',
  styleUrls: ['./flexible-list.component.css']
})
export class FlexibleListComponent implements OnInit {

  // TODO items

  // TODO template ref
  @ContentChild(TemplateRef)
  tmpl!: TemplateRef<any>;

  ngOnInit(): void { }

}
