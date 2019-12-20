import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { AuthGuard } from '../guards/auth.guard';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FormsGuard } from './guards/forms.guard';


const routes: Routes = [
  {
    path: '', component: FormsComponent, canActivate: [AuthGuard],
  },
  {
    path: 'reactive', component: ReactiveFormsComponent
  },
  {
    path: 'template/:id', component: TemplateFormsComponent , canDeactivate: [FormsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
