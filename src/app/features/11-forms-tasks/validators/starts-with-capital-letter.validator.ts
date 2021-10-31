import { ValidatorFn } from '@angular/forms';

const capitalLetterRE = /^[A-Z]/;

export const startsWithCapitalLetterValidator: ValidatorFn = (control) => {
  const { value } = control;

  if (capitalLetterRE.test(value)) {
    return null;
  } else {
    return { firstCharMustBeCapitalLetter: true };
  }
};
