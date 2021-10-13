import { RealEstatesApiService } from '@app/core/api/real-estates-api.service';
import { ReactiveComponentModule } from '@ngrx/component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@app/shared/shared.module';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { stubServerApi } from 'src/test/utils/server-stub';

import { PureMyCardComponent } from '../pure-my-card/pure-my-card.component';
import { SmartRealEstateDetailsCardComponent } from './smart-real-estate-details-card.component';
import { waitForElementToBeRemoved } from '@testing-library/dom';

describe('SmartRealEstateDetailsCardComponent', () => {

  it('should render loding info and fetched real estates data', async () => {
    const entityId = 100;
    const realEstateJson = generateEntityJson(entityId);
    stubServerApi.stub({
      method: 'get',
      path: `/api/real-estates/${entityId}`,
      responseJson: realEstateJson
    });
    await renderComponent({ entityId });

    await screen.findByRole('progressbar', { hidden: true });

    await screen.findByText(new RegExp(`Street Addr.: ${realEstateJson.street}`, 'i'));
    await screen.findByText(new RegExp(`Type: ${realEstateJson.type}`, 'i'));
  });

  fit('should STRICTLY render loding info and fetched real estates data', async () => {
    const entityId = 100;
    const realEstateJson = generateEntityJson(entityId);
    stubServerApi.stub({
      method: 'get',
      path: `/api/real-estates/${entityId}`,
      responseJson: realEstateJson,
      options: { delay: 200 }
    });
    await renderComponent({ entityId });

    // rendered within header
    const headingEl = await findHeading();
    within(headingEl).getByText(/Loading\.\.\./i);

    const contentEl = await await findContent();
    within(contentEl).getByRole('progressbar', { hidden: true });

    await screen.findByText(/Price/i);

    const loadedHeadingEl = await findHeading();
    within(loadedHeadingEl).getByText(new RegExp(`Street Addr.: ${realEstateJson.street}`, 'i'));

    const loadedContentEl = await findContent();
    within(loadedContentEl).getByText(new RegExp(`Type: ${realEstateJson.type}`, 'i'));

  });

  xit('should render loading info while waiting for async data', async () => {
    expect(true).toEqual(false);
  });

  xit('should render error message is error received from server', async () => {
    expect(true).toEqual(false);
  });

});

type Props = Partial<SmartRealEstateDetailsCardComponent>;

async function renderComponent(params: Props) {
  return render(SmartRealEstateDetailsCardComponent, {
    componentProperties: params,
    declarations: [PureMyCardComponent],
    imports: [SharedModule, ReactiveComponentModule, HttpClientModule],
    providers: [RealEstatesApiService]
  });
}

function generateEntityJson(id: number) {
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

async function findHeading() {
  return screen.findByRole('heading', {
    name: 'Real Estate Heading', hidden: true
  });
}

async function findContent() {
  return screen.findByRole('banner', {
    name: 'Real Estate Content', hidden: true
  });
}

