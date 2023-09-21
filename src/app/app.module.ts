import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {OrdersComponent} from './components/orders/orders.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HomeComponent} from './components/admin/home/home.component';
import {TipSettingsComponent} from './components/admin/tip-settings/tip-settings.component';
import {UsersComponent} from './components/admin/users/users.component';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../enviroments/enviroment";
import { TipHistoryComponent } from './components/tip-history/tip-history.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { UserFormComponent } from './components/admin/users/user-form/user-form.component';
import { ProductFormComponent } from './components/admin/products/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    OrdersComponent,
    HomeComponent,
    TipSettingsComponent,
    UsersComponent,
    TipHistoryComponent,
    ProductsComponent,
    UserFormComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
