import { HttpClientModule } from '@angular/common/http';
import { RealEstatesApiService } from '@app/core/api/real-estates-api.service';
import { SharedModule } from '@app/shared/shared.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { render, screen, within, waitForElementToBeRemoved } from '@testing-library/angular';
import { stubServerApi } from 'src/test/utils/server-stub';

import { PureMyCardComponent } from '../pure-my-card/pure-my-card.component';
import { SmartRealEstateDetailsCardComponent } from './smart-real-estate-details-card.component';

describe('SmartRealEstateDetailsCardComponent', () => {

  it('should render fetched real estates data', async () => {
    const realEstateJson = generateRelEstateEntityJson(100);
    stubServerApi.stub({
      method: 'get',
      path: '/api/real-estates/100',
      responseJson: realEstateJson
    });

    const props = generateProps();
    await renderComponent(props);

    const { body, header } = await findCardElements();

    await within(header).findByText(/Loading\.\.\./i);
    await within(body).findByRole('progressbar', { hidden: true });

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar', { hidden: true }));

    const { street, price, lat, lng } = realEstateJson;
    const { body: bodyWithData, header: headerwithData } = await findCardElements();

    const headerContent = await within(headerwithData).findByText(/Street Addr/i);
    expect(headerContent).toHaveTextContent(street);

    const priceEl = await within(bodyWithData).findByText(/Price/i);
    expect(priceEl).toHaveTextContent(`${price}`);

    const geoEl = await within(bodyWithData).findByText(/Geo/i);
    expect(geoEl).toHaveTextContent(`${lat.toFixed(2)}, ${lng.toFixed(2)}`);
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

async function findCardElements() {
  const card = await screen.findByRole('region', { name: 'Card', hidden: true });
  const header = await within(card).findByRole('region', { name: /Card Header/i, hidden: true });
  const body = await within(card).findByRole('region', { name: /Card Body/i, hidden: true });
  const footer = await within(card).findByRole('region', { name: /Card Footer/i, hidden: true });
  return {
    header, body, footer
  };
}

function generateProps(): Props {
  return {
    entityId: 100
  };
}

function generateRelEstateEntityJson(id: number) {
  return {
    id,
    "builtAt": "Sun Mar 12 2007 16:11:54 GMT+0100 (CET)",
    "lat": 53.997123,
    "lng": 20.230891,
    "price": 997.997,
    "street": "Sezam St.",
    "type": "COM"
  };
}

