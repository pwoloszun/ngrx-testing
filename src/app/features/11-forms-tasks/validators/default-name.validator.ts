import { ValidatorFn, Validators, AbstractControl } from '@angular/forms';

import { startsWithCapitalLetterValidator } from './starts-with-capital-letter.validator';

export const defaultNameValidator: ValidatorFn = (control: AbstractControl) => {
  const requiredValidationResult = Validators.required(control);
  // TODO: min length 3
  const min3ValidatorFn = Validators.minLength(3);
  const minLengthResult = min3ValidatorFn(control);

  // TODO: starts with capital letter
  const capitalLetterValidatorFn = Validators.pattern(/^[A-Z]/);
  const capitalLeterResult = capitalLetterValidatorFn(control);


  // TODO
  // '...man' - required man suffix

  // 'batman'
  // 'robman'
  // 'robin' // invalid
  const re = /man$/i;
  const manSuffixResult = re.test(control.value) ? null : { invalidDefaultName: { message: `some invalid msg` } };

  return {
    ...requiredValidationResult,
    ...minLengthResult,
    ...capitalLeterResult,
    ...manSuffixResult
  };

};
