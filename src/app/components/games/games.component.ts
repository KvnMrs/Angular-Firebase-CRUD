import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';
import { DocumentData } from 'firebase/firestore/lite';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  // games: IGame[] = []

  constructor(private gameService : GameService) { }

  public listGames: Promise<{ data: DocumentData; id: string }[]> =
  this.gameService.getGames();

  ngOnInit(): void {    
  }

  


}
