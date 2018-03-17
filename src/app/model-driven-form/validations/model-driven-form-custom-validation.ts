
import { AbstractControl } from '@angular/forms';

export function isCorrectNewCaledoniaAccountNo(formControl: AbstractControl): { [key: string]: boolean } {
  if ((!formControl.value.startsWith('FR')) || formControl.value.length !== 27) {
    return {
      invalidAccountNo: true
    };
  }
}

