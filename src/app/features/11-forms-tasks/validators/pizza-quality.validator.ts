import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PizzaQualityValidator implements AsyncValidator {

  constructor() {
    // HERE you can inject ng service
  }

  validate(extras: AbstractControl): Observable<ValidationErrors | null> {
    let result = null;
    const extraValues: string[] = extras.value;
    if (extraValues.some((value) => value === 'anchois')) {
      result = { badPizzaQuality: ['should not include anchois'] };
    }
    return of(result).pipe(
      delay(1200),
    );
  }
}
