import {Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';

function hasExclamationMark (input: FormControl) {
  const hasExclamation = input.value.indexOf('!') >= 0;

  return hasExclamation ? null : { needsExclamation: true };
}

@Component({
    selector: 'model-driven-form',
    templateUrl: 'model-driven.component.html',
    styleUrls: ['model-driven.component.scss']
})

export class ModelDrivenComponent {
    username = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  
  password = new FormControl('', [
    Validators.required,
    hasExclamationMark
  ]);

  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });

  constructor(private builder: FormBuilder) { }

  login () {
    console.log(this.loginForm.value);
  }
}