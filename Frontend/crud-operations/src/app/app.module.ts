import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './Components/employee/signup/signup.component';
import { EditProfileComponent } from './Components/user/edit-profile/edit-profile.component';
import { MainPageComponent } from './components/mainPage/main-page/main-page.component';
import { AdminPageSignInComponent } from './components/admin/admin-page-sign-in/admin-page-sign-in.component';
import { AdminPageSignInFormComponent } from './components/admin/admin-page-sign-in-form/admin-page-sign-in-form.component';
import { AdminAddProductsComponent } from './Components/admin/admin-add-products/admin-add-products.component';
import { AdminAuthGuard } from './Guards/adminAuthGuard';
import { AdminUpdateProductsComponent } from './Components/admin/admin-update-products/admin-update-products.component';
import { AdminDeleteProductsComponent } from './Components/admin/admin-delete-products/admin-delete-products.component';
import {AdminPanelComponent} from './Components/admin/admin-panel/admin-panel.component';
import { RetrieveStatusComponent } from './Components/user/retrieve-status/retrieve-status.component';
import { AddFundsComponent } from './Components/user/add-funds/add-funds.component';
import { UserLogoutComponent } from './Components/user/user-logout/user-logout.component';
import { CommonModule } from '@angular/common';
import { UserPanelComponent } from './Components/user/user-panel/user-panel.component';
import { RaiseTicketComponent } from './Components/user/raise-ticket/raise-ticket.component';
import { EmployeePageComponent } from './Components/admin/employee-page/employee-page.component';
import { AddEmployeeComponent } from './Components/admin/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './Components/admin/delete-employee/delete-employee.component';
import { GenerateReportsComponent } from './Components/admin/generate-reports/generate-reports.component';
import { CartComponent } from './Components/user/cart/cart.component';
import { ReportsTableComponent } from './Components/admin/reports-table/reports-table.component';
import { ViewRequestsComponent } from './Components/admin/view-requests/view-requests.component';
import { ProductListComponent } from './Components/user/product-list/product-list.component';
import { UpdateOrderComponent } from './Components/employee/update-order/update-order.component';
import { EmployeePanelComponent } from './Components/employee/employee-panel/employee-panel.component';
import { EmployeeSigninComponent } from './Components/employee/employee-signin/employee-signin.component';
import { EmployeeProfileComponent } from './Components/employee/employee-profile/employee-profile.component';
import { UnlockUsersComponent } from './Components/employee/unlock-users/unlock-users.component';
import { UserSignInComponent } from './Components/user/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './Components/user/user-sign-up/user-sign-up.component';
import {EmployeeSendRequestComponent} from './Components/employee/employee-send-request/employee-send-request.component'    
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AdminPageSignInComponent,
    AdminPageSignInFormComponent,
    AdminAddProductsComponent,
    AdminUpdateProductsComponent,
    AdminDeleteProductsComponent,
    AdminPanelComponent,
    EmployeePageComponent,
    EditProfileComponent,
    RetrieveStatusComponent,
    EditProfileComponent,
    AddFundsComponent,
    UserLogoutComponent,
    UserPanelComponent,
    RaiseTicketComponent,
    EmployeeSigninComponent,
    SignupComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GenerateReportsComponent,
    CartComponent,
    ProductListComponent,
    ViewRequestsComponent,
    ProductListComponent,
    UpdateOrderComponent,
    ReportsTableComponent,
    UpdateOrderComponent,
    EmployeePanelComponent,
    EmployeeProfileComponent,
    EmployeeSigninComponent,
    UserSignInComponent,
    UserSignUpComponent,
    UnlockUsersComponent,
    EmployeeSendRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
