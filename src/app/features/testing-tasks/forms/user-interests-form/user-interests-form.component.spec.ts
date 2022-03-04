import { merge } from 'lodash';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { matSelectOption } from 'src/test/utils/mat-helpers';
import { UserInterestsFormComponent } from './user-interests-form.component';
import { SharedModule } from '@app/shared/shared.module';

describe('UserInterestsFormComponent', () => {

  fit('should enable submit button when form is valid', async () => {
    await renderComponent();

    const nameCtrl = await screen.findByLabelText(/Full Name/i);
    userEvent.type(nameCtrl, 'jsopn smith');

    const ageCtrl = await screen.findByLabelText(/Your Age/i);
    userEvent.type(ageCtrl, '12');

    const countrySelectCtrl = await screen.findByLabelText(/Select Your Country/i);
    matSelectOption(countrySelectCtrl, /Poland/i);

    // userEvent.click(countrySelectCtrl);
    // const optionEl = await screen.findByText(/Poland/i);
    // userEvent.click(optionEl);

    const submitBtn = await screen.findByRole('button', { name: /Submit/i, hidden: true });

    expect(submitBtn).toBeEnabled();

    // expect(true).toEqual(false);
  });

  xit('should render form containing controls', async () => {
    expect(true).toEqual(false);
  });

  xit('should toggle render Details group', async () => {
    expect(true).toEqual(false);
  });

  xit('should send request with form DTO to server when form submitted', async () => {
    expect(true).toEqual(false);
  });

});

async function renderComponent() {
  await render(UserInterestsFormComponent, {
    imports: [
      ReactiveFormsModule,
      SharedModule,
      HttpClientModule,
    ]
  });
}

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
