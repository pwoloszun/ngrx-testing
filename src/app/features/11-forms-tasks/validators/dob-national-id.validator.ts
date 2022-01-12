import { AbstractControl, ValidatorFn } from '@angular/forms';

function getCtrl(name: string, group: AbstractControl): AbstractControl {
  const control = group.get(name);
  if (!control) {
    throw new Error(`Missing '${name}' form control`);
  }
  return control;
}

export const dobNationalIdValidator: ValidatorFn = (group) => {
  // TODO compare and validate 'dateOfBirth' & 'nationalId' form control values

  return { dobNotMatchNationalId: true };
};
