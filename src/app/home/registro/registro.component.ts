import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

import { MustMatch } from '../matchValidator/must-match';
import { from } from 'rxjs';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  testForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: ['', [Validators.required, Validators.email]],
      iduser: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      acceptTerms: ['', [Validators.requiredTrue]]
    },
    {
      validators: MustMatch('password','confirmPassword')
    });
  }

  get f() {
    return this.testForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.testForm.valid){
      return;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.testForm.reset();
  }

}
