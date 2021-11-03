import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { stubServerApi } from 'src/test/utils/server-stub';

import { PureListComponent } from '../pure-list/pure-list.component';
import { SmartQuickSearchComponent } from './smart-quick-search.component';

describe('SmartQuickSearchComponent', () => {

  it('should render search field', async () => {
    await renderComponent();

    const playersJson = generatePlayerEntitesJson();
    stubServerApi.stub({
      method: 'get',
      path: '/api/players',
      responseJson: playersJson,
      options: { delay: 500 }
    });

    const searchField = await screen.findByLabelText(/Search/i);
    userEvent.type(searchField, 'my phrase');

    await screen.findByRole('progressbar', { hidden: true });
    await waitForElementToBeRemoved(
      () => screen.queryByRole('progressbar', { hidden: true }),
    );

    await screen.findByText(/Search results/i);

    const list = await screen.findByRole('list', { hidden: true });
    const listItems = await within(list).findAllByRole('listitem', { hidden: true });

    expect(listItems.length).toEqual(playersJson.length);
    // expect(true).toEqual(false);
  });

  xit('should render progress while waiting for response from server', async () => {
    expect(true).toEqual(false);
  });

});

async function renderComponent() {
  return render(SmartQuickSearchComponent, {
    // componentProperties: {}
    imports: [
      SharedModule,
      ReactiveFormsModule,
      HttpClientModule,
    ],
    declarations: [
      PureListComponent
    ],
  });
}

function generatePlayerEntitesJson() {
  const jsonEntities = [
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
  return jsonEntities;
}
