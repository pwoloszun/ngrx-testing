import userEvent from '@testing-library/user-event';

import { SmartRealEstateDetailsCardComponent } from './smart-real-estate-details-card.component';

describe('SmartRealEstateDetailsCardComponent', () => {

  fit('should render loding info and fetched real estates data', async () => {
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

// const entityJson = {
//   id,
//   "builtAt": "Sun Mar 12 2007 16:11:54 GMT+0100 (CET)",
//   "lat": 53.997123,
//   "lng": 20.230891,
//   "price": 997.997,
//   "street": "Sezam St.",
//   "type": "COM"
// };
