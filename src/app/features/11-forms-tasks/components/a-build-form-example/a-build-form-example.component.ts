import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'nts-a-build-form-example',
  templateUrl: './a-build-form-example.component.html',
})
export class ABuildFormExampleComponent implements OnInit {

  singleNameCtrl!: FormControl;
  singleAgeCtrl!: FormControl;

  formGroupOne!: FormGroup;
  formGroupTwo!: FormGroup;

  constructor(private fb: FormBuilder) { }

  submitHandler() {
    console.log('form value', this.formGroupOne.value);
  }

  submitSingleCtrlsForm() {
    console.log('age:', this.singleAgeCtrl.value, ' name:', this.singleNameCtrl.value);
  }

  ngOnInit(): void {
    this.initSingleCtrls();
    // this.initFormOne();
    this.initFormTwo();

    // TODO: read/write values
  }

  private initSingleCtrls(): void {
    this.singleNameCtrl = new FormControl('abc');
    this.singleAgeCtrl = new FormControl(123);
  }


  private initFormOne(): void {
    this.formGroupOne = new FormGroup({
      yyyUuu: new FormControl(456),
      login: new FormControl(''),
      password: new FormControl(''),
      luckyNumber: new FormControl(0),
      dob: new FormControl('1996-01-14'),
      hasAgreed: new FormControl(false),
      comments: new FormControl(''),
    });
  }

  private initFormTwo(): void {
    this.formGroupTwo = this.fb.group({
      yyyUuu: [456],
      login: ['batm2'],
      login2: new FormControl('batm2'),
      login3: this.fb.control('batm2'),
      password: [''],
      luckyNumber: [0],
      dob: ['1996-01-14'],
      hasAgreed: [false],
      comments: [''],
    });
  }
}
