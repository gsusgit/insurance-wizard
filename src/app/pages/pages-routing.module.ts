import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FormComponent } from './form/form.component';
import { LegalComponent } from './legal/legal.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { SendComponent } from './send/send.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'confirm', component: ConfirmComponent
  },
  {
    path: 'cookies', component: CookiesComponent
  },
  {
    path: 'faqs', component: FaqsComponent
  },
  {
    path: 'form', component: FormComponent
  },
  {
    path: 'legal', component: LegalComponent
  },
  {
    path: 'notfound', component: NotFoundComponent
  },
  {
    path: 'privacy', component: PrivacyComponent
  },
  {
    path: 'send', component: SendComponent
  },
  {
    path: 'terms', component: TermsComponent
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'welcome'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {

}
