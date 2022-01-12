import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'nts-my-simple-form',
  templateUrl: './my-simple-form.component.html',
  styleUrls: ['./my-simple-form.component.css']
})
export class MySimpleFormComponent {

  cities = [
    { label: 'Lublin', value: 'lublin' },
    { label: 'Warszawa', value: 'warsaw' },
    { label: 'Kraków', value: 'cracow' },
    { label: 'Częstochowa', value: 'czestochowa' },
    { label: 'Gliwice', value: 'gliwice' },
    { label: 'Zielona Góra', value: 'zielona-gora' },
  ];

  emailsFrequencyOptions = [
    { label: 'Every week', value: 'weekly' },
    { label: 'Every month', value: 'monthly' },
    { label: 'No emails', value: 'never' },
  ];

  // TODO 1 build form:
  myForm = this.formBuilder.group({
    email: [''],
    password: [''],

    primaryAddress: this.formBuilder.group({
      // city: '',
      street: [''],
    }),
    // emailsFrequency: '',
    isAgreementConfirmed: [false]
  });

  // TODO 2 validations:
  //  email: required
  //  password: required; min length 3
  //  isAgreementConfirmed: required


  constructor(private formBuilder: FormBuilder) { }

  submitHandler(event: any) {
    event.preventDefault();
    // TODO: log all form values
    console.log('simple form value', this.myForm.value);
  }

}
