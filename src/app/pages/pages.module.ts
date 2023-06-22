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
import { NotFoundComponent } from "./notfound/notfound.component";
import { CookiesComponent } from './cookies/cookies.component';
import { LegalComponent } from './legal/legal.component';
import { TermsComponent } from './terms/terms.component';
import { FaqsComponent } from './faqs/faqs.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    FormComponent,
    ConfirmComponent,
    SendComponent,
    PrivacyComponent,
    NotFoundComponent,
    CookiesComponent,
    LegalComponent,
    TermsComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
