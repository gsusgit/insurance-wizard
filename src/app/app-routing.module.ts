import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormComponent } from './pages/form/form.component';
import { ConfirmComponent } from "./pages/confirm/confirm.component";
import { SendComponent } from "./pages/send/send.component";
import { PrivacyComponent } from "./pages/privacy/privacy.component";
import { NotFoundComponent } from "./pages/notfound/notfound.component";
import { CookiesComponent } from "./pages/cookies/cookies.component";
import { LegalComponent } from "./pages/legal/legal.component";
import { TermsComponent } from './pages/terms/terms.component';
import { FaqsComponent } from './pages/faqs/faqs.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'send', component: SendComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: '**', pathMatch: 'full', redirectTo: 'notfound' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
