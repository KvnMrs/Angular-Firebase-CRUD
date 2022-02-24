import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGame } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';
import { DocumentData } from "@angular/fire/firestore"
@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  showSubmitMessage: boolean;
  game: DocumentData | undefined

  constructor(public gameService : GameService,private route: ActivatedRoute) { 
    this.gameService.form,
    this.showSubmitMessage = false;
  }

  // retrieve id game from URL
  paramId: string = this.route.snapshot.params['id'];

   ngOnInit(){
  // using SERVICE for adding information game in the Placeholders inputs
        this.gameService.getGameByID(this.paramId).then(res => {this.game = res})
}

  // update function 
  onUpdate() {
    const data = this.gameService.form.value;
  // using SERVICE for update information(s) game
    this.gameService.updateGame(data, this.paramId)
    .then(res => {
      this.showSubmitMessage = true
    })}
}


