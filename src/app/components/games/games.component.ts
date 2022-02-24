import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { IGame } from 'src/app/models/game.model';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
// define vairable that will contains all games with the model IGame
  games: IGame[] = [];
  showUnderscore = true


  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  // using SERVICE for retrieve informations of all games
    this.gameService.getGames().subscribe((res: IGame[]) => {
      this.games = res;

    // function to flash the underscore
      setInterval(() => {
        this.showUnderscore  = !this.showUnderscore
      }, 1000)

  })

}
  // using SERVICE for delete a game
deleteGame(game: IGame) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.gameService.deleteGame(game).then(() =>
     console.log('delete successful'));
  }}
}
