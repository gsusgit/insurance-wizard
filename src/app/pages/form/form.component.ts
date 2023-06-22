import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from '../../services/validators.service';
import { insurances } from "../../models/insurance/insurance-data.store";
import { brokers } from "../../models/broker/broker-data.store";

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
    type: ['', [Validators.required]],
    checkLegal: [false, Validators.requiredTrue]
  });
  public insurances = insurances;
  public brokers = brokers;
  public currentStep = 1;
  public data: any;

  constructor(private formBuilder: FormBuilder,
              private vs: ValidatorsService,
              private router: Router) {
  }

  public get form() {
    return this.userForm.controls;
  }

  public sendData() {
    this.data = this.userForm.value;
    delete this.data.checkLegal;
    localStorage.setItem('seguros_user_data', JSON.stringify(this.data));
    this.router.navigate(['/confirm']);
  }

}
