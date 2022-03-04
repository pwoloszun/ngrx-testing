import { screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

export async function matSelectOption(selectCtrl: HTMLElement, optionText: string | RegExp) {
  userEvent.click(selectCtrl);
  const optionEl = await screen.findByText(optionText);
  userEvent.click(optionEl);
}
