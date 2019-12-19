import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { ContentProjectDemoComponent } from './content-project-demo/content-project-demo.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { NeworderService } from './orders/services/neworder.service';
import { OrdersService } from './orders/services/orders.service';
import { CommentsComponent } from './comments/comments.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { CustomInterceptor } from './interceptor/customintercepto.service';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateFormsComponent } from './forms/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    EmployeeComponent,
    HeaderComponent,
    ContentProjectDemoComponent,
    OrdersComponent,
    OrdersListComponent,
    CommentsComponent,
    CommentsListComponent,
    MainNavComponent,
    PageNotFoundComponent,
    FormsComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: OrdersService, useClass: NeworderService },
  {
    provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }