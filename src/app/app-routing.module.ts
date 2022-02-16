import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { GameComponent } from './components/game/game.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'games', component : GamesComponent},
  {path: 'addGame', component : GameComponent},
  { path: 'games/:gameId', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
