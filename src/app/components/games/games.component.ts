import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { DocumentData } from 'firebase/firestore/lite';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private gameService : GameService) { }

  public listGames: Promise<{ data: DocumentData; id: string }[]> =
  this.gameService.getGames();

  ngOnInit(): void {
  }

}
