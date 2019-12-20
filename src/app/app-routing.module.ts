import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentDetailsComponent } from './comments/comment-details/comment-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CommentGuard } from './comments/guards/comment.guard';
// import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'comment', component: CommentsComponent, 
    canActivate: [AuthGuard],
    canActivateChild : [AuthGuard],
    children: [
      { path: ':id/edit/:postId', component: CommentDetailsComponent },
    ],
    resolve: {
      comments : CommentGuard
    }
  },
  // { path: 'comment/:id/edit/:postId', component: CommentDetailsComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'order', component: OrdersComponent, canActivate: [AuthGuard] },
  {
    path: 'forms', loadChildren: () =>
      import('./forms/forms.module').then(m => m.CustomFormsModule),
      canLoad : [AuthGuard]
  },
  // { path: 'forms', component : FormsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
