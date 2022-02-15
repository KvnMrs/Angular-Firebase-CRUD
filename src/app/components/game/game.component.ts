import { Component, OnInit  } from '@angular/core';
import { GameService } from 'src/app/services/game.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  showSubmitMessage: boolean; 

  constructor(public gameService : GameService) {
    this.gameService.form
    this.showSubmitMessage = false;
   }

  ngOnInit(): void {
  }

  onSubmit() {
    const data = this.gameService.form.value;
    this.gameService.addGame(data)
    .then(res => {
      this.showSubmitMessage = true
    })
      
  }




}
