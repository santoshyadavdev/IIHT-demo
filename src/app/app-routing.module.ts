import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentDetailsComponent } from './comments/comment-details/comment-details.component';
// import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
  { path: 'comment', component: CommentsComponent },
  { path: 'comment/:id/edit', component: CommentDetailsComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'order', component: OrdersComponent },
  {
    path: 'forms', loadChildren: () =>
      import('./forms/forms.module').then(m => m.CustomFormsModule)
  },
  // { path: 'forms', component : FormsComponent },
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
