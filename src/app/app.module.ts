import { AuthGuard } from './auth.guard';
import { FetchService } from './fetch.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CheckoutComponent } from './inventory/checkout/checkout.component';
import { ThanksComponent } from './thanks/thanks.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { NotificationBarComponent } from './admin/admin-dashboard/notification-bar/notification-bar.component';
import { EditInventoryComponent } from './admin/admin-dashboard/edit-inventory/edit-inventory.component';
import { DataAnalyticsComponent } from './admin/admin-dashboard/data-analytics/data-analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    InventoryComponent,
    PagenotfoundComponent,
    CheckoutComponent,
    ThanksComponent,
    AdminComponent,
    AdminDashboardComponent,
    NotificationBarComponent,
    EditInventoryComponent,
    DataAnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [FetchService, InventoryComponent , AdminComponent , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
