import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PipeExamplesPageComponent } from './pages/pipe-examples-page/pipe-examples-page.component';

const routes: Routes = [
  {
    path: '',
    component: PipeExamplesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPipesRoutingModule { }
