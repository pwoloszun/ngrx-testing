import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';

import { countriesDict } from '../../dictionaries/countries.dict';
import { getInterestsByType$, interestTypesDict } from '../../dictionaries/interests.dict';
import { forEach } from 'lodash';

@Component({
  selector: 'nts-my-form-validation-task',
  templateUrl: './my-form-validation-task.component.html',
  styleUrls: ['./my-form-validation-task.component.css']
})
export class MyFormValidationTaskComponent implements OnInit {

  allCountries = countriesDict;
  allInterestTypes = interestTypesDict;

  // TODO
  selectedInterestsMap: any = {};

  availableInterestLabels: string[] = [];

  myForm = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    age: [null, [Validators.required, Validators.min(7)]],

    areDetailsEnabled: [false],
    height: [null],

    country: [null, Validators.required],

    selectedInterestType: [null],
    availableInterests: this.formBuilder.array([]),

  });

  get selectedInterestTypeCtrl() {
    return this.myForm.get('selectedInterestType') as FormControl;
  }

  get areDetailsEnabledCtrl() {
    return this.myForm.get('areDetailsEnabled') as FormControl;
  }

  get availableInterestsCtrl() {
    return this.myForm.get('availableInterests') as FormArray;
  }

  get heightCtrl() {
    return this.myForm.get('height') as FormControl;
  }

  constructor(private formBuilder: FormBuilder) { }

  submitHandler(event: any) {
    event.preventDefault();

    // TODO 4: include selectedInterestsMap in form values
    const allFormValues = {
      ...this.myForm.value,
      selectedInterestsMap: this.selectedInterestsMap
    };
    console.log('AJAX REQ: form task value', allFormValues);
  }

  ngOnInit(): void {
    this.areDetailsEnabledCtrl
      .valueChanges.subscribe((isDetailsEnabled) => {
        if (!isDetailsEnabled) {
          this.heightCtrl.setValue(null);
        }
      });

    this.selectedInterestTypeCtrl.valueChanges.pipe(
      switchMap((interestType) => {
        return getInterestsByType$(interestType);
      })
    ).subscribe((interests) => {
      console.log('type:', interests);
      this.availableInterestLabels = interests;
      this.buildAvailableInterests(interests);
    });

  }

  private buildAvailableInterests(interests: string[]) {
    const interestsFormCtrls = interests.map((interestName) => {
      const intValue = this.selectedInterestsMap[interestName];
      return this.formBuilder.control(intValue);
    });
    const availableInterestsFormArray = this.formBuilder.array(interestsFormCtrls);

    this.myForm.setControl('availableInterests', availableInterestsFormArray);

    this.availableInterestsCtrl.valueChanges
      .subscribe((interestValues) => {
        interestValues.forEach((value: boolean, i: number) => {
          const interestName = this.availableInterestLabels[i];
          // console.log('interestName:', interestName, value);
          this.selectedInterestsMap[interestName] = !!value;
        });
      });
  }
}
