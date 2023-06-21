import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm/confirm.component';
import { SendComponent } from './send/send.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    FormComponent,
    ConfirmComponent,
    SendComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
