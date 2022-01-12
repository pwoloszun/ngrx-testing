import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';

import { countriesDict } from '../../dictionaries/countries.dict';
import { getInterestsByType$, interestTypesDict } from '../../dictionaries/interests.dict';

@Component({
  selector: 'nts-my-form-validation-task',
  templateUrl: './my-form-validation-task.component.html',
  styleUrls: ['./my-form-validation-task.component.css']
})
export class MyFormValidationTaskComponent implements OnInit {

  allCountries = countriesDict;
  allInterestTypes = interestTypesDict;

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

  constructor(private formBuilder: FormBuilder) { }

  submitHandler(event: any) {
    event.preventDefault();

    // TODO 4: include selectedInterestsMap in form values
    console.log('form task value');
  }

  ngOnInit(): void {
    // TODO 1:
    //    if !areDetailsEnabled then set 'height' to null


    // TODO 2:
    //    on selectedInterestType change do:
    //      getInterestsByType$
    //      buildAvailableInterests

    // TODO 3:
    //    on form value changes do:
    //      based on availableInterests update selectedInterestsMap
  }

  buildAvailableInterests(interests: string[]) {
    // TODO labels
    // TODO checkbox values
    //    this.myForm.setControl('availableInterests', this.formBuilder.array([]));
  }
}
