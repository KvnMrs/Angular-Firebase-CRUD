import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute } from '@angular/router';
import { IGame } from 'src/app/models/game.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string | null | undefined;
  games: IGame[] = []
  constructor(public gameService : GameService, private route: ActivatedRoute) { }

  
  ngOnInit(): void {
    
    const routeParams = this.route.snapshot.paramMap;
     this.id = (routeParams.get('gameId'));
     this.gameService.getGameByID(this.id)
 
  }
  

}
