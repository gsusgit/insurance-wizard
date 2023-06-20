import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    FormComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
