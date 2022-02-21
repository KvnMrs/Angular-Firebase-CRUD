import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  showSubmitMessage: boolean;


  constructor(public gameService : GameService,private route: ActivatedRoute) { 
    this.gameService.form,
    this.showSubmitMessage = false;
  }

  paramId: string = this.route.snapshot.params['id'];

  ngOnInit(): void {

  }
  
  onUpdate() {
    const data = this.gameService.form.value;
    this.gameService.updateGame(data, this.paramId)
    .then(res => {
      this.showSubmitMessage = true
    })}
}
