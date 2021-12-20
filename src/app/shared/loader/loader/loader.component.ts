import { Component, Input } from '@angular/core';

enum Status {
  Pending = 'PENDING',
  Loaded = 'LOADED',
  Error = 'ERROR',
}

@Component({
  selector: 'nts-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  // TODO isLoading

  // TODO error
  error?: Error | string | null = null;

  get errorMessage(): string {
    // TODO typeof this.error === 'string'
    return 'Some error TODO';
  }

}
