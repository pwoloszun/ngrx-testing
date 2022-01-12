import { ValidatorFn, Validators, AbstractControl } from '@angular/forms';

import { startsWithCapitalLetterValidator } from './starts-with-capital-letter.validator';

export const defaultNameValidator: ValidatorFn = (control: AbstractControl) => {
  const requiredValidationResult = Validators.required(control);
  // TODO: min length 3
  // TODO: starts with capital letter

  // TODO
  // '...man' - required man suffix

  // 'batman'
  // 'robman'
  // 'robin' // invalid

  //  TODO return merged validation results
  // return null;

  const result = {
    invalidDefaultName: { message: `Does not match man suffix` }
  };

  return {
    ...requiredValidationResult,
    ...result
  };

};
