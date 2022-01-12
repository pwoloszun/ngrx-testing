import { AbstractControl, ValidatorFn } from '@angular/forms';

function getCtrl(name: string, group: AbstractControl): AbstractControl {
  const control = group.get(name);
  if (!control) {
    throw new Error(`Missing '${name}' form control`);
  }
  return control;
}

export const dobNationalIdValidator: ValidatorFn = (group) => {
  const dobCtrl = getCtrl('dateOfBirth', group);
  const nationalIdCtrl = getCtrl('nationalId', group);

  const dobValue = (dobCtrl.value as string).replace(/-/g, '').substr(2, 6);
  const nationalIdValue = (nationalIdCtrl.value as string).substr(0, 6);

  if (dobValue !== nationalIdValue) {
    return { dobNotMatchNationalId: true };
  } else {
    return null;
  }
};
