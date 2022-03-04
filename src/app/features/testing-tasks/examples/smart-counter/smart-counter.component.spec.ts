import { merge } from 'lodash';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { SmartCounterComponent } from './smart-counter.component';
import { TestingTasksRoutingModule } from '../../testing-tasks-routing.module';
import { PureCounterComponent } from '../pure-counter/pure-counter.component';
import { SharedModule } from '../../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { stubServerApi } from 'src/test/utils/server-stub';

describe('SmartCounterComponent', () => {

  fit('should fetch counter value from api endpoint and render it', async () => {
    const id = 100;
    const value = 123;

    const responseJson = {
      id,
      value
    };
    stubServerApi.stub({
      method: 'get',
      path: `/api/counter-values/100`,
      responseJson
    });

    await renderComponent();

    await screen.findByText(/Value: 123/i, {}, { timeout: 3000 });
  });

});

async function renderComponent() {
  await render(SmartCounterComponent, {
    declarations: [
      PureCounterComponent,
    ],
    imports: [
      SharedModule,
      HttpClientModule,
    ]
  });
}
