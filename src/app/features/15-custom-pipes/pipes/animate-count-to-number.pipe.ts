import { Pipe, PipeTransform } from '@angular/core';

const STEPS_COUNT = 100;

@Pipe({
  name: 'animateCountToNumber',
  pure: false // IMPORTANT --> impure aka statefull
})
export class AnimateCountToNumberPipe implements PipeTransform {

  private currentValue = 0;
  private targetValue = 0;
  private intervalId: any;

  transform(nextValue: number, duration = 800): number {
    if (nextValue === this.targetValue) {
      return this.currentValue;
    }
    this.finishAnimation();
    this.targetValue = nextValue;
    const delay = duration / STEPS_COUNT;
    const delta = (nextValue - this.currentValue) / STEPS_COUNT;
    this.intervalId = setInterval(() => {
      const isLastStep = Math.abs(this.targetValue - this.currentValue) <= Math.abs(delta);
      if (isLastStep) {
        this.currentValue = this.targetValue;
        this.finishAnimation();
      } else {
        const rounded = this.currentValue + delta;
        this.currentValue = Math.round(rounded * 100) / 100;
      }
    }, delay);
    return this.currentValue;
  }

  private finishAnimation() {
    clearInterval(this.intervalId);
  }

}
