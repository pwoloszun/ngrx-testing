import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'nts-tmpl-outlet-example',
  templateUrl: './tmpl-outlet-example.component.html',
})
export class TmplOutletExampleComponent implements OnInit {

  myCtx1 = { $implicit: `DEF VA`, firstName: 'Mickey Mouse', age: 123 };
  myCtx2 = { firstName: 'Donald Duck', age: 456 };

  ngOnInit(): void {
  }

}
