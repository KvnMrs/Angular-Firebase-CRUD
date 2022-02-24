import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { DocumentData } from "@angular/fire/firestore"
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  showSubmitMessage: boolean;
  game: DocumentData | undefined
  // define the update form
  updateForm : FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    img_url: new FormControl("", Validators.required),
    description: new FormControl("",Validators.required),
  })

  constructor(public gameService : GameService,private route: ActivatedRoute) { 
    this.gameService.form,
    this.showSubmitMessage = false;
  }

  // retrieve id game from URL
  paramId: string = this.route.snapshot.params['id'];

   async ngOnInit(){
  // using SERVICE for adding information game in the Placeholders inputs
      await this.gameService.getGameByID(this.paramId).then(res   => {this.game = res });

      // Set default form value with the game data
      this.updateForm.controls['name'].setValue(this.game?.['name'])
      this.updateForm.controls['img_url'].setValue(this.game?.['img_url'])
      this.updateForm.controls['description'].setValue(this.game?.['description'])

}
  // update function
   onUpdate() {
  const data =  this.updateForm.value
  // using SERVICE for update information(s) game
    this.gameService.updateGame(this.paramId, data )
    .then(res => {
      this.showSubmitMessage = true
    })}
}


