import { RealEstatesApiService } from '@app/core/api/real-estates-api.service';
import { SharedModule } from '@app/shared/shared.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { render } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { PureMyCardComponent } from '../pure-my-card/pure-my-card.component';

import { SmartRealEstateDetailsCardComponent } from './smart-real-estate-details-card.component';
import { HttpClientModule } from '@angular/common/http';

describe('SmartRealEstateDetailsCardComponent', () => {

  fit('should render fetched real estates data', async () => {
    const props = generateProps();
    await renderComponent(props);

    // request

    // loading, progressbar

    // after data fetched:
    //    card header content
    //    card body content
    //    card footer content

    expect(true).toEqual(false);
  });

  xit('should render loading info while waiting for async data', async () => {
    expect(true).toEqual(false);
  });

  xit('should render error message is error received from server', async () => {
    expect(true).toEqual(false);
  });

});

type Props = Partial<SmartRealEstateDetailsCardComponent>;

async function renderComponent(props: Props) {
  return render(SmartRealEstateDetailsCardComponent, {
    componentProperties: props,
    imports: [
      SharedModule,
      ReactiveComponentModule,
      HttpClientModule,
    ],
    providers: [
      RealEstatesApiService
    ],
    declarations: [
      PureMyCardComponent
    ]
  });
}

function generateProps(): Props {
  return {
    entityId: 100
  };
}

// const entityJson = {
//   id,
//   "builtAt": "Sun Mar 12 2007 16:11:54 GMT+0100 (CET)",
//   "lat": 53.997123,
//   "lng": 20.230891,
//   "price": 997.997,
//   "street": "Sezam St.",
//   "type": "COM"
// };
