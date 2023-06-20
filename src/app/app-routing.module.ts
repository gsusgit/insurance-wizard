import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'form', component: FormComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'welcome'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
