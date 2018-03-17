import { Component, OnInit, AfterContentInit, OnDestroy, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { isCorrectNewCaledoniaAccountNo } from './validations/model-driven-form-custom-validation';

@Component({
  selector: 'model-driven-form',
  templateUrl: './model-driven-form.html',
  styleUrls: ['../model-driven-form/model-driven-form.scss']
})
export class ModelDrivenForm implements OnInit, AfterViewInit {
  rFormGroup: FormGroup;
  email: AbstractControl;
  accountValidator: (formControl: AbstractControl) => { [key: string]: boolean } = isCorrectNewCaledoniaAccountNo;
  private skills: FormArray;


  constructor(private fb: FormBuilder) {
    this.rFormGroup = fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', []),
      accountNo: new FormControl('', [this.accountValidator]),
      attributes: fb.array([this.createItems()])
    });
    this.email = this.rFormGroup.controls['email'];
  }

  ngOnInit(): void {
    this.email.valueChanges.subscribe((value: any) => {
      alert(value);
    });
  }

  ngAfterViewInit(): void {
    this.rFormGroup.controls['name'].setValidators(Validators.compose([Validators.required]));
    this.rFormGroup.controls['accountNo'].setValidators(Validators.compose([this.accountValidator]));
  }

  createItems = (): FormGroup => {
    return this.fb.group({
      skill: new FormControl()
    });
  }

  addSkill = () => {
    this.skills = this.rFormGroup.get('attributes') as FormArray;
    this.skills.push(this.createItems());
  }

  onSubmit = (form: FormGroup): void => {
    if (form.valid) {
      alert('FORM VALID');
    } else {
      this.displayErrors();
    }
  }

  cleanInitialError = () => {
    Object.keys(this.rFormGroup.controls).forEach(index => {
      this.rFormGroup.controls[index].setErrors(null);
    });
  }

  displayErrors() {
    let errorList: string[] = [];
    let constrolsInForm: string[] = Object.keys(this.rFormGroup.controls);

    for (let element of constrolsInForm) {
      if (!this.rFormGroup.controls[element].valid) {
        errorList.push(' '.concat(element));
      }
    }

    alert('ERRORS:' + errorList.join());

  }

}
