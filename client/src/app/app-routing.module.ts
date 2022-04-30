import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddProductsComponent } from './Components/admin/admin-add-products/admin-add-products.component';
import { AdminDeleteProductsComponent } from './Components/admin/admin-delete-products/admin-delete-products.component';
import { AdminPageSignInFormComponent } from './components/admin/admin-page-sign-in-form/admin-page-sign-in-form.component';
import { AdminPageSignInComponent } from './components/admin/admin-page-sign-in/admin-page-sign-in.component';
import { AdminUpdateProductsComponent } from './Components/admin/admin-update-products/admin-update-products.component';
import { MainPageComponent } from './components/mainPage/main-page/main-page.component';
import { AddFundsComponent } from './Components/user/add-funds/add-funds.component';
import { EditProfileComponent } from './Components/user/edit-profile/edit-profile.component';
import { RetrieveStatusComponent } from './Components/user/retrieve-status/retrieve-status.component';
import { UserLogoutComponent } from './Components/user/user-logout/user-logout.component';
import { UserPanelComponent } from './Components/user/user-panel/user-panel.component';
import { AdminAuthGuard } from './Guards/adminAuthGuard';
import { CartComponent } from './Components/user/cart/cart.component';
import { ProductListComponent } from './Components/user/product-list/product-list.component';
import { EmployeePageComponent } from './Components/admin/employee-page/employee-page.component';
import { GenerateReportsComponent } from './Components/admin/generate-reports/generate-reports.component';
import { ReportsTableComponent } from './Components/admin/reports-table/reports-table.component';
import { ViewRequestsComponent } from './Components/admin/view-requests/view-requests.component';
import { RaiseTicketComponent } from './Components/user/raise-ticket/raise-ticket.component';
import { SigninComponent } from './Components/user/signin/signin.component';
import { EmployeePanelComponent } from './Components/employee/employee-panel/employee-panel.component';
import { UpdateOrderComponent } from './Components/employee/update-order/update-order.component';
import { EmployeeSigninComponent } from './Components/employee/employee-signin/employee-signin.component';
import { UserSiginSignUpTicketFormComponent } from './Components/user/user-sigin-sign-up-ticket-form/user-sigin-sign-up-ticket-form.component';
import { UserSignInComponent } from './Components/user/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './Components/user/user-sign-up/user-sign-up.component';

const routes: Routes = [

  {path:"home",component:MainPageComponent},
  {path:"admin/SignIn",component:AdminPageSignInComponent},
  {path:"admin/SignInForm",component:AdminPageSignInFormComponent},
  {path:"admin/DashBoard",component:AdminAddProductsComponent,canActivate:[AdminAuthGuard]},
  {path:"admin/UpdateProducts",component:AdminUpdateProductsComponent,canActivate:[AdminAuthGuard]},
  {path:"admin/DeleteProducts",component:AdminDeleteProductsComponent,canActivate:[AdminAuthGuard]},
  {path:"admin/employees", component: EmployeePageComponent},
  {path:"user",component:UserPanelComponent},
  {path:"admin/GenerateReports", component: GenerateReportsComponent},
  {path:"admin/ReportsTable/:type/:query", component: ReportsTableComponent},
  {path:"admin/ReportsTable/:type/:startDate/:endDate", component: ReportsTableComponent},
  {path:"admin/ViewRequests", component: ViewRequestsComponent},
  {path:"user/OrderStatus",component:RetrieveStatusComponent},
  {path:"user/EditProfile",component:EditProfileComponent},
  {path:"user/AddFunds",component:AddFundsComponent},
  {path:"user/Logout",component:UserLogoutComponent},
  {path:"user/product-list", component: ProductListComponent },
  {path:"user/cart", component: CartComponent },
  { path:"user/raise-ticket", component: RaiseTicketComponent },
  { path:"employee/DashBoard", component: EmployeePanelComponent },
  { path:"employee/updateOrder", component: UpdateOrderComponent },
  {path:"employee/SignIn",component:EmployeeSigninComponent},
  {path:"user/SignOptions",component:UserSiginSignUpTicketFormComponent},
  {path:"user/SignIn",component:UserSignInComponent},
  {path:"user/SignUp",component:UserSignUpComponent},
  {path:"user/RaiseTicket",component:RaiseTicketComponent},
  {path:"",redirectTo:"home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
