import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute } from '@angular/router';
import { DocumentData } from 'firebase/firestore';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

constructor(public gameService : GameService, private route: ActivatedRoute) { }
showUnderscore = true

  paramId: string = this.route.snapshot.params['id'];

  //variable stored the result of getGameById from service
  game: Promise<DocumentData | undefined> =
  this.gameService.getGameByID(this.paramId);

  ngOnInit(): void {
    setInterval(() => {
      this.showUnderscore  = !this.showUnderscore
    }, 1000)
  }



}
