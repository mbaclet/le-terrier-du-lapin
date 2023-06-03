import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {RabbitComponent} from "./rabbit/rabbit.component";
import {DicerollerComponent} from "./diceroller/diceroller.component";
import {GenerateurVilleComponent} from "./generateur-ville/generateur-ville.component";
import {GenerateurPersonnageComponent} from "./generateur-personnage/generateur-personnage.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "users", component: UserListComponent},
  {path: "users/:id", component: UserDetailsComponent},
  {path: "add", component: AddUserComponent},
  {path: "rabbit", component: RabbitComponent},
  {path: "dice", component: DicerollerComponent},
  {path: "ville", component: GenerateurVilleComponent},
  {path: "perso", component: GenerateurPersonnageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
