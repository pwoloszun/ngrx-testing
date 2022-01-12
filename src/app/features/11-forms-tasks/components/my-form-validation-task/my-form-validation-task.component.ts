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
    // TODO 1:
    //    if !areDetailsEnabled then set 'height' to null
    this.areDetailsEnabledCtrl
      .valueChanges.subscribe((isDetailsEnabled) => {
        if (!isDetailsEnabled) {
          this.heightCtrl.setValue(null);
        }
      });


    console.log('qq');
    getInterestsByType$('sport').subscribe((interests) => {
      console.log('interests:', interests);
      this.availableInterestLabels = interests;
      this.buildAvailableInterests(interests);
    });

    // TODO 2:
    //    on selectedInterestType change do:
    //      getInterestsByType$
    //      buildAvailableInterests

    // TODO 3:
    //    on form value changes do:
    //      based on availableInterests update selectedInterestsMap
  }

  private buildAvailableInterests(interests: string[]) {
    // TODO labels
    // TODO checkbox values
    const interestsFormCtrls = interests.map((int) => {
      return this.formBuilder.control(false);
    });
    const availableInterestsFormArray = this.formBuilder.array(interestsFormCtrls);

    this.myForm.setControl('availableInterests', availableInterestsFormArray);

    this.availableInterestsCtrl.valueChanges
      .subscribe((interestValues) => {
        interestValues.forEach((value: boolean, i: number) => {
          const interestName = this.availableInterestLabels[i];
          // console.log('interestName:', interestName, value);
          this.selectedInterestsMap[interestName] = value;
        });
      });
  }
}
