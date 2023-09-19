import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  //Ruta por defecto
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //Rutas
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'orders', component: OrdersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
