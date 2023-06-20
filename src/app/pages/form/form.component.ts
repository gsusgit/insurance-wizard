import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public userForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    lastname1: ['', [Validators.required]],
    lastname2: [''],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
    phone1: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(15), Validators.pattern(this.vs.phonePattern)]],
    phone2: ['', [Validators.minLength(9), Validators.maxLength(15), Validators.pattern(this.vs.phonePattern)]],
    company: [''],
    type: ['Todo riesgo sin franquicia', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder,
              private vs: ValidatorsService,
              private router: Router) {
  }

  get form() {
    return this.userForm.controls;
  }

  sendData() {

  }

  nextStep(stepNumber: number) {

  }

}
