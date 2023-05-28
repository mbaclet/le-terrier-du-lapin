import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RabbitComponent} from './rabbit/rabbit.component';
import {DicerollerComponent} from './diceroller/diceroller.component';
import {AddUserComponent} from './user/add-user/add-user.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {UserListComponent} from './user/user-list/user-list.component';
import { GenerateurVilleComponent } from './generateur-ville/generateur-ville.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RabbitComponent,
    DicerollerComponent,
    AddUserComponent,
    UserDetailsComponent,
    UserListComponent,
    GenerateurVilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
