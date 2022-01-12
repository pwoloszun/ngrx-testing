import { ValidatorFn, Validators } from '@angular/forms';

import { startsWithCapitalLetterValidator } from './starts-with-capital-letter.validator';

export const defaultNameValidator: ValidatorFn = (control) => {
  const requiredValidationResult = Validators.required(control);
  // TODO: min length 3
  // TODO: starts with capital letter

  //  TODO return merged validation results
  return null;
};
