import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormComponent } from './pages/form/form.component';
import { ConfirmComponent } from "./pages/confirm/confirm.component";

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
