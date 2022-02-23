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

  paramId: string = this.route.snapshot.params['id'];

   ngOnInit(){
        this.gameService.getGameByID(this.paramId).then(res => {this.game = res})
}

  onUpdate() {
    const data = this.gameService.form.value;
    this.gameService.updateGame(data, this.paramId)
    .then(res => {
      this.showSubmitMessage = true
    })}
}
function setTimeInterval(arg0: () => void, arg1: number) {
  throw new Error('Function not implemented.');
}

