import { NbaPlayersApiService } from '@app/core/api/nba/nba-players-api.service';
import { SharedModule } from '@app/shared/shared.module';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { stubServerApi } from 'src/test/utils/server-stub';

import { SmartQuickSearchComponent } from './smart-quick-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PureListComponent } from '../pure-list/pure-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('SmartQuickSearchComponent', () => {

  fit('should render search field', async () => {
    await renderComponent();

    expect(true).toEqual(false);
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


// const jsonEntities = [
//   {
//     "id": 14,
//     "first_name": "Ike",
//     "height_feet": null,
//     "height_inches": null,
//     "last_name": "Anigbogu",
//     "position": "C",
//     "weight_pounds": null,
//     "team_id": 12
//   },
//   {
//     "id": 25,
//     "first_name": "Ron",
//     "height_feet": null,
//     "height_inches": null,
//     "last_name": "Baker",
//     "position": "G",
//     "weight_pounds": null,
//     "team_id": 20
//   },
//   {
//     "id": 67,
//     "first_name": "MarShon",
//     "height_feet": null,
//     "height_inches": null,
//     "last_name": "Brooks",
//     "position": "G",
//     "weight_pounds": null,
//     "team_id": 15
//   },
//   {
//     "id": 71,
//     "first_name": "Lorenzo",
//     "height_feet": null,
//     "height_inches": null,
//     "last_name": "Brown",
//     "position": "G",
//     "weight_pounds": null,
//     "team_id": 28
//   },
// ];
