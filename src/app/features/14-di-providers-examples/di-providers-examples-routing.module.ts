import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiProvidersExamplesComponent } from './pages/di-providers-examples/di-providers-examples.component';

const routes: Routes = [
  {
    path: '',
    component: DiProvidersExamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiProvidersExamplesRoutingModule { }
