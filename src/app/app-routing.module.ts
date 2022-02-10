import { DataAnalyticsComponent } from './admin/admin-dashboard/data-analytics/data-analytics.component';
import { EditInventoryComponent } from './admin/admin-dashboard/edit-inventory/edit-inventory.component';
import { AuthGuard } from './auth.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ThanksComponent } from './thanks/thanks.component';
import { CheckoutComponent } from './inventory/checkout/checkout.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/dashboard' , component: AdminDashboardComponent , canActivate: [AuthGuard]},
  {path: 'admin/dashboard/edit-inventory'  , component: EditInventoryComponent},
  {path: 'admin/dashboard/data-analytics' , component: DataAnalyticsComponent },
  {path: 'inventory/:index/:tokengen' ,component: InventoryComponent},
  {path: 'inventory/checkout/:mix/:our' ,component: CheckoutComponent},
  {path: 'inventory/checkout/:mix/:our/:thanks', component: ThanksComponent},
  {path: "**"  , component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent,AdminComponent]
