import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomPipesRoutingModule } from './custom-pipes-routing.module';
import { PipeExamplesPageComponent } from './pages/pipe-examples-page/pipe-examples-page.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { AnimateCountToNumberPipe } from './pipes/animate-count-to-number.pipe';


@NgModule({
  declarations: [
    PipeExamplesPageComponent,
    FormatDatePipe,
    ReversePipe,
    MultiplyPipe,
    AnimateCountToNumberPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomPipesRoutingModule
  ]
})
export class CustomPipesModule { }
