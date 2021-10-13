import { merge } from 'lodash';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { UserInterestsFormComponent } from './user-interests-form.component';

describe('UserInterestsFormComponent', () => {

  xit('should render form containing controls', async () => {
    expect(true).toEqual(false);
  });

  fit('should toggle render Details group', async () => {
    expect(true).toEqual(false);
  });

  xit('should send request with form DTO to server when form submitted', async () => {
    expect(true).toEqual(false);
  });

});

// const defaultDto = {
//   fullName: 'Bob Smith',
//   age: 55,
//   areDetailsEnabled: true,
//   height: 179,
//   country: 'PL',
//   selectedInterestsMap: {
//     backetball: true,
//     soccer: true,
//     hockey: false,
//     'ski-jumping': false,
//   },
// };
