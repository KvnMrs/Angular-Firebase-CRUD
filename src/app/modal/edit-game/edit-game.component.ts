import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  showSubmitMessage: boolean; 

  constructor(public gameService : GameService) { 
    this.gameService.form,
    this.showSubmitMessage = false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const data = this.gameService.form.value;
    this.gameService.updateGame(data)
    .then(res => {
      this.showSubmitMessage = true
    })}
}
