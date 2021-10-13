import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { SmartQuickSearchComponent } from './smart-quick-search.component';
import { PureListComponent } from '../pure-list/pure-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NbaPlayersApiService } from '@app/core/api/nba/nba-players-api.service';
import { stubServerApi } from '../../../../../test/utils/server-stub';

describe('SmartQuickSearchComponent', () => {

  xit('should render search field', async () => {
    expect(true).toEqual(false);
  });

  xit('should render progress while waiting for response from server', async () => {
    expect(true).toEqual(false);
  });

  it('should fetch nba players by search query and render results', async () => {
    await renderComponent();

    const quickSearch = screen.getByLabelText(/Search/i);
    // const quickSearch = screen.getByRole('search', { hidden: true });

    const responseJsonEntities = generateResponseJson();
    stubServerApi.stub({
      method: 'get',
      path: '/api/players',
      responseJson: responseJsonEntities,
      options: { delay: 100 }
    });

    userEvent.type(quickSearch, 'leb');

    await screen.findByRole('progressbar', { hidden: true });

    const items = await screen.findAllByRole('listitem', { hidden: true });

    expect(items.length).toEqual(responseJsonEntities.length);
  });

});


async function renderComponent() {
  return render(SmartQuickSearchComponent, {
    imports: [SharedModule, ReactiveFormsModule, HttpClientModule],
    declarations: [PureListComponent],
    providers: [NbaPlayersApiService]
  });
}


function generateResponseJson() {
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
