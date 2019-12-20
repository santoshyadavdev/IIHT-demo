import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from './product/product.module';
import { CommentDetailsComponent } from './comments/comment-details/comment-details.component';
import { LoginComponent } from './login/login.component';
import { NamePipe } from './orders/pipe/name.pipe';
import { HoverDirective } from './directive/hover.directive';
import { SharedModule } from './shared/shared.module';
import { APP_SERVICE, APP_CONFIG } from './valuprovider/app.config.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    ContentProjectDemoComponent,
    OrdersComponent,
    OrdersListComponent,
    CommentsComponent,
    CommentsListComponent,
    MainNavComponent,
    PageNotFoundComponent,
    CommentDetailsComponent,
    LoginComponent,
    NamePipe
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [{ provide: OrdersService, useClass: NeworderService },
  {
    provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor,
    multi: true
  },
  { provide: APP_SERVICE, useValue: APP_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
