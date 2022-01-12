import { Component, OnInit } from '@angular/core';
import { Validators, FormArray, FormBuilder, FormControl } from '@angular/forms';

import { defaultNameValidator } from '../../validators/default-name.validator';
import { dobNationalIdValidator } from '../../validators/dob-national-id.validator';

@Component({
  selector: 'nts-interralated-validations-form',
  templateUrl: './interralated-validations-form.component.html',
  styleUrls: ['./interralated-validations-form.component.css']
})
export class InterralatedValidationsFormComponent implements OnInit {

  myForm = this.fb.group({
    fullName: [''], // TODO validation: defaultname validator
    dateOfBirth: [''], // TODO validation: yyyy-mm-dd pattern
    nationalId: [''], // TODO validation: 11 digits
  }); // TODO: form validation DoB to national id validation

  // helpers
  get fullNameCtrl(): FormControl {
    return this.myForm.get('fullName') as FormControl;
  }

  get dobCtrl(): FormControl {
    return this.myForm.get('dateOfBirth') as FormControl;
  }

  get nationalIdCtrl(): FormControl {
    return this.myForm.get('nationalId') as FormControl;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  submitHandler() {
    console.log('form value', this.myForm.value);
  }
}
