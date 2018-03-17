import { Component, OnInit } from '@angular/core';
import { TemplateDrivenFormModel } from './template-form.model';
import * as Rx from 'rxjs/Rx';
import { NgForm, AbstractControl } from '@angular/forms';
@Component({
  selector: 'tempalte-driven-form',
  templateUrl: './template-form.view.html',
  styleUrls: ['../template-driven-form/template-form.view.scss']
})

export class TemplateDrivenForm implements OnInit {

  templateModel: TemplateDrivenFormModel;
  counterList: number[] = [1];
  counter: number;
  private emailEventEmitter = new Rx.Subject<Event>();

  constructor() {
    this.templateModel = {
      name: null,
      email: null,
      accountNo: null
    };

    this.emailEventEmitter.subscribe(result => {
      this.templateModel.email = 'new@email.com';
    });
  }

  ngOnInit = (): void => {

  }

  onFormSubmit = (form: NgForm): void => {
    alert(form.valid ? 'FORM VALID' : 'FORM INCORRECT');

  }

  addSkill = (): void => {
    this.counterList.push(this.counter++);
  }

  onEmailChange = (value: Event): void => {
    this.emailEventEmitter.next(value);
  }
}
