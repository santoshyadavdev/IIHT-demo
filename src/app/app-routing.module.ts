import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
  { path: 'comment', component: CommentsComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'product', component: ProductComponent },
  { path: 'forms', component : FormsComponent },
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
