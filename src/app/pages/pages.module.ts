import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    WelcomeComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink
  ]
})
export class PagesModule { }
