import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrdersDetailComponent } from './orders/orders-detail/orders-detail.component';
import { AuthGuard, JwtInterceptor, UserssModule } from '@winsoft/userss';

import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { CategoriesService } from '@winsoft/products';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import {InputTextModule} from 'primeng/inputtext';


import {ToastModule} from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ColorPickerModule} from 'primeng/colorpicker';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DropdownModule} from 'primeng/dropdown';
import {TagModule} from 'primeng/tag';
import {InputMaskModule} from 'primeng/inputmask';
import {FieldsetModule} from 'primeng/fieldset';


const UX_MODULE = [
  CardModule,
  ToolbarModule,
  ButtonModule,
  TableModule,
  InputTextModule,
  ToastModule,
  ConfirmDialogModule,
  ColorPickerModule,
  InputNumberModule,
  InputTextareaModule,
  InputSwitchModule,
  DropdownModule,
  TagModule,
  InputMaskModule,
  FieldsetModule
];



const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'categories',
        component: CategoriesListComponent,
      },
      {
        path: 'categories/form',
        component: CategoriesFormComponent,
      },
      {
        path: 'categories/form/:id',
        component: CategoriesFormComponent,
      },
      {
        path: 'products',
        component: ProductsListComponent,
      },
      {
        path: 'products/form',
        component: ProductsFormComponent,
      },
      {
        path: 'products/form/:id',
        component:  ProductsFormComponent,
      },
      {
        path: 'users',
        component: UsersListComponent,
      },
      {
        path: 'users/form',
        component: UsersFormComponent,
      },
      {
        path: 'users/form/:id',
        component:  UsersFormComponent,
      },
      {
        path: 'orders',
        component: OrdersListComponent,
      },
      {
        path: 'orders/:id',
        component: OrdersDetailComponent,
      },

    ]
  },
  {

      path: '**',
      redirectTo: '',
      pathMatch: 'full'

  }
];

  @NgModule({
  declarations: [AppComponent,
     NxWelcomeComponent,
     DashboardComponent,
      ShellComponent,
       SidebarComponent,
       CategoriesListComponent,
       CategoriesFormComponent,
       ProductsListComponent,
       ProductsFormComponent,
        UsersListComponent,
        UsersFormComponent,
        OrdersListComponent,
        OrdersDetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserssModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    ...UX_MODULE,
  ],
  providers: [CategoriesService, MessageService, ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: [
    ShellComponent,
    ToastModule,
    TagModule,
  ],
})
export class AppModule {}
