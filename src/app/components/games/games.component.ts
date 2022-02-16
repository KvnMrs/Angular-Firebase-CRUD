import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { IGame } from 'src/app/models/game.model';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: IGame[] = [];

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((res: IGame[]) => {
      this.games = res;
  })
}
}
