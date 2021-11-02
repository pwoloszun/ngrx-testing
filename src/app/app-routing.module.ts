import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './layout/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  // { path: '', pathMatch: 'full', redirectTo: '/forms-tasks' },

  {
    path: 'component-basics',
    loadChildren: () =>
      import('./features/01-component-basics/component-basics.module').then((m) => m.ComponentBasicsModule),
  },
  {
    path: 'binding-examples',
    loadChildren: () =>
      import('./features/02-binding-examples/binding-examples.module').then((m) => m.BindingExamplesModule),
  },
  {
    path: 'inputs-outputs-examples',
    loadChildren: () =>
      import('./features/03-inputs-outputs-examples/inputs-outputs-examples.module').then(
        (m) => m.InputsOutputsExamplesModule
      ),
  },
  {
    path: 'todos',
    loadChildren: () => import('./features/04-todos/todos.module').then((m) => m.TodosModule),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./features/08-heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: 'cities',
    loadChildren: () => import('./features/09-cities/cities.module').then((m) => m.CitiesModule),
  },
  {
    path: 'real-estates',
    loadChildren: () => import('./features/10-real-estates/real-estates.module').then((m) => m.RealEstatesModule),
  },

  // {
  //   path: 'routing-tasks',
  //   loadChildren: () => import('./features/routing-tasks/routing-tasks.module').then((m) => m.RoutingTasksModule),
  // },

  // {
  //   path: 'forms-tasks',
  //   loadChildren: () => import('./features/11-forms-tasks/forms-tasks.module').then((m) => m.FormsTasksModule),
  // },
  {
    path: 'dynamic-components',
    loadChildren: () =>
      import('./features/12-dynamic-components/dynamic-components.module').then((m) => m.DynamicComponentsModule),
  },
  {
    path: 'custom-directives',
    loadChildren: () =>
      import('./features/13-custom-directives/custom-directives.module').then((m) => m.CustomDirectivesModule),
  },
  {
    path: 'di-providers-examples',
    loadChildren: () =>
      import('./features/14-di-providers-examples/di-providers-examples.module').then(
        (m) => m.DiProvidersExamplesModule
      ),
  },
  // {
  //   path: 'custom-pipes',
  //   loadChildren: () => import('./features/15-custom-pipes/custom-pipes.module').then((m) => m.CustomPipesModule),
  // },
  // {
  //   path: 'content-projection',
  //   loadChildren: () =>
  //     import('./features/21-content-projection/content-projection.module').then((m) => m.ContentProjectionModule),
  // },
  {
    path: 'refs-to-template-elements',
    loadChildren: () =>
      import('./features/22-refs-to-template-elements/refs-to-template-elements.module').then((m) => m.RefsToTemplateElementsModule),
  },

  // RxJS
  {
    path: 'rxjs-gui-tasks',
    loadChildren: () => import('./features/39-rxjs-gui-tasks/rxjs-gui-tasks.module').then((m) => m.RxjsGuiTasksModule),
  },
  {
    path: 'rxjs-github-repos',
    loadChildren: () =>
      import('./features/51-rxjs-github-repos/rxjs-github-repos.module').then((m) => m.RxjsGithubReposModule),
  },

  // {
  //   path: 'ngrx-basics',
  //   loadChildren: () => import('./features/41-ngrx-basics/ngrx-basics.module').then(m => m.NgrxBasicsModule),
  // },
  // {
  //   path: 'ngrx-async-flow',
  //   loadChildren: () => import('./features/42-ngrx-async-flow/ngrx-async-flow.module').then(m => m.NgrxAsyncFlowModule),
  // },
  // {
  //   path: 'advanced-todos',
  //   loadChildren: () => import('./features/44-adv-todos/adv-todos.module').then(m => m.AdvTodosModule),
  // },
  // {
  //   path: 'single-room-detector',
  //   loadChildren: () => import('./features/45-single-room-detector/single-room-detector.module').then(m => m.SingleRoomDetectorModule),
  // },
  // {
  //   path: 'many-room-detectors',
  //   loadChildren: () => import('./features/46-many-room-detectors/many-room-detectors.module').then(m => m.ManyRoomDetectorsModule),
  // },
  // {
  //   path: 'my-mail',
  //   loadChildren: () => import('./features/47-my-mail/my-mail.module').then(m => m.MyMailModule),
  // },
  // {
  //   path: 'cancelable-mail',
  //   loadChildren: () => import('./features/48-cancelable-mail/cancelable-mail.module').then(m => m.CancelableMailModule),
  // },

  // {
  //   path: 'my-booking',
  //   loadChildren: () => import('./features/booking/booking.module').then(m => m.BookingModule),
  // },

  // {
  //   path: 'global-modal',
  //   loadChildren: () => import('./features/global-modal/global-modal.module').then(m => m.GlobalModalModule),
  // },
  // {
  //   path: 'global-confirm',
  //   loadChildren: () => import('./features/global-confirm/global-confirm.module').then(m => m.GlobalConfirmModule),
  // },

  // testing
  {
    path: 'testing-tasks',
    loadChildren: () => import('./features/testing-tasks/testing-tasks.module').then((m) => m.TestingTasksModule),
  },

  // e2e testing
  // {
  //   path: 'component-basics',
  //   loadChildren: () =>
  //     import('./features/01-component-basics/component-basics.module').then((m) => m.ComponentBasicsModule),
  // },
  // {
  //   path: 'binding-examples',
  //   loadChildren: () =>
  //     import('./features/02-binding-examples/binding-examples.module').then((m) => m.BindingExamplesModule),
  // },
  // {
  //   path: 'inputs-outputs-examples',
  //   loadChildren: () =>
  //     import('./features/03-inputs-outputs-examples/inputs-outputs-examples.module').then(
  //       (m) => m.InputsOutputsExamplesModule
  //     ),
  // },
  // {
  //   path: 'cy-tasks',
  //   loadChildren: () => import('./features/cy-tasks/cy-tasks.module').then((m) => m.CyTasksModule),
  // },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
