import { Component, OnInit  } from '@angular/core';
import { GameService } from 'src/app/services/game.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  // variable triggers message, submit or error
  showSubmitMessage: boolean; 
  showErrorMessage: boolean; 

  constructor(public gameService : GameService) {
    this.gameService.form
    this.showSubmitMessage = false;
    this.showErrorMessage = false;

   }

  ngOnInit(): void {
  }

  onSubmit() {
    //  checking form value(s)
    const data = this.gameService.form.value;

    // IF a value missing, show error message
    if( data.name == "" || data.img_url == "" || data.description == '') {
       this.showErrorMessage = true
       return
    }
    // ELSE validate the new game & show submit message
    else
    console.log(data.name.length)
    this.gameService.addGame(data)
    .then(res => {
      this.showErrorMessage = false
      this.showSubmitMessage = true
    })
  }




}
