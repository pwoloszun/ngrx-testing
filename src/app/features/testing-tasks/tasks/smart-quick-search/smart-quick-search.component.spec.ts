import { NbaPlayersApiService } from '@app/core/api/nba/nba-players-api.service';
import { SharedModule } from '@app/shared/shared.module';
import { render, screen, within, waitForElementToBeRemoved } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { stubServerApi } from 'src/test/utils/server-stub';

import { SmartQuickSearchComponent } from './smart-quick-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PureListComponent } from '../pure-list/pure-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('SmartQuickSearchComponent', () => {

  it('should render search field', async () => {
    await renderComponent();

    const entities = generateJsonEntities();
    stubServerApi.stub({
      method: 'get',
      path: '/api/players',
      responseJson: entities,
      options: { delay: 300 }
    });

    const searchField = await screen.findByLabelText(/Search/i);
    userEvent.type(searchField, 'some search phrase');

    const progressEl = await screen.findByRole('progressbar', { hidden: true });
    await waitForElementToBeRemoved(progressEl);
    await screen.findByText(/Search Results/i);

    const resultsList = await screen.findByRole('list', { hidden: true });
    const resultItems = await within(resultsList).findAllByRole('listitem', { hidden: true });

    expect(resultItems.length).toEqual(entities.length);
    entities.forEach((entity, index) => {
      const resultItem = resultItems[index];
      expect(resultItem).toHaveTextContent(entity.last_name);
    });

    // expect(true).toEqual(false);
  });

  xit('should render progress while waiting for response from server', async () => {
    expect(true).toEqual(false);
  });

});


async function renderComponent() {
  await render(SmartQuickSearchComponent, {
    declarations: [
      PureListComponent,
    ],
    providers: [
      NbaPlayersApiService,
    ],
    imports: [
      ReactiveFormsModule,
      HttpClientModule,
      SharedModule,
    ]
  });
}

function generateJsonEntities() {
  return [
    {
      "id": 14,
      "first_name": "Ike",
      "height_feet": null,
      "height_inches": null,
      "last_name": "Anigbogu",
      "position": "C",
      "weight_pounds": null,
      "team_id": 12
    },
    {
      "id": 25,
      "first_name": "Ron",
      "height_feet": null,
      "height_inches": null,
      "last_name": "Baker",
      "position": "G",
      "weight_pounds": null,
      "team_id": 20
    },
    {
      "id": 67,
      "first_name": "MarShon",
      "height_feet": null,
      "height_inches": null,
      "last_name": "Brooks",
      "position": "G",
      "weight_pounds": null,
      "team_id": 15
    },
    {
      "id": 71,
      "first_name": "Lorenzo",
      "height_feet": null,
      "height_inches": null,
      "last_name": "Brown",
      "position": "G",
      "weight_pounds": null,
      "team_id": 28
    },
  ];
}
