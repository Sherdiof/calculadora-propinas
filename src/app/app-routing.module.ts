import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { OrdersComponent } from './components/orders/orders.component';
import { HomeComponent } from "./components/admin/home/home.component";
import { TipSettingsComponent } from "./components/admin/tip-settings/tip-settings.component";
import { UsersComponent } from "./components/admin/users/users.component";
import { TipHistoryComponent } from "./components/tip-history/tip-history.component";
import { ProductsComponent } from "./components/admin/products/products.component";
import {AuthGuard} from "./core/guard/auth.guard";
import {GuestGuard} from "./core/guard/guest.guard";


const routes: Routes = [
  //Ruta por defecto
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //Rutas
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'tip-settings', component: TipSettingsComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'tip-history', component: TipHistoryComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
