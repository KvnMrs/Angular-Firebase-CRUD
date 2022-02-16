import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Firestore, addDoc, collection, collectionData, doc, deleteDoc, docData, setDoc, updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IGame } from '../models/game.model';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private firestore : Firestore) {
  }

  public getGames(): Observable<IGame[]> {
    const gameRef = collection(this.firestore, 'Games');
    return collectionData(gameRef, { idField: 'id' }) as Observable<IGame[]>;
  }

  getgameByID(id: string) {
    const gameRef = doc(this.firestore, `Games/${id}`);
    return docData(gameRef, { idField: 'id' }) as Observable<IGame>;
  }

form = new FormGroup({
  name: new FormControl('', Validators.required),
  img_url: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required),
})


public addGame(game: IGame) {
  const gamesRef = collection(this.firestore, 'Games');
  return addDoc(gamesRef, game);
}



}