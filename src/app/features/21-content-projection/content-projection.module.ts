import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { LoaderModule } from '@shared/loader/loader.module';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ContentProjectionComponent } from './pages/content-projection/content-projection.component';
import { FlexibleListComponent } from './components/flexible-list/flexible-list.component';
import { TmplExampleComponent } from './components/01-tmpl-example/tmpl-example.component';
import { ContExampleComponent } from './components/02-cont-example/cont-example.component';
import { TmplOutletExampleComponent } from './components/03-tmpl-outlet-example/tmpl-outlet-example.component';
import { ContentExampleComponent } from './components/04-content-example/content-example.component';
import { LoadableContentTaskComponent } from './components/loadable-content-task/loadable-content-task.component';
import { MyDashboardTaskComponent } from './components/my-dashboard-task/my-dashboard-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyCardComponent } from './components/my-card/my-card.component';
import { CardsTaskComponent } from './components/cards-task/cards-task.component';
import { MySimpleContentComponent } from './components/my-simple-content/my-simple-content.component';

@NgModule({
  declarations: [
    ContentProjectionComponent,
    FlexibleListComponent,
    TmplExampleComponent,
    ContExampleComponent,
    TmplOutletExampleComponent,
    ContentExampleComponent,
    LoadableContentTaskComponent,
    MyDashboardTaskComponent,
    MyCardComponent,
    CardsTaskComponent,
    MySimpleContentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LoaderModule,
    ContentProjectionRoutingModule,
  ],
})
export class ContentProjectionModule {
}
