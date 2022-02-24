import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Firestore, addDoc, collection, collectionData, doc, deleteDoc, docData, setDoc, updateDoc, getDoc, DocumentSnapshot, DocumentData
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IGame } from '../models/game.model';
import { Data } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private firestore : Firestore) {
  }

  //  form add/update
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    img_url: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })

  // getAllGames
  public getGames(): Observable<IGame[]> {
    const gameRef = collection(this.firestore, 'Games');
    return collectionData(gameRef, { idField: 'id' }) as Observable<IGame[]>;
  }

  // getGameById
  public async getGameByID(id: string ){
    const gameRef = doc(this.firestore, `Games`, id);
    const DOC_SNAP: DocumentSnapshot<DocumentData> = await getDoc(gameRef);
      return DOC_SNAP.data();
  }

  // addGame
  public addGame(game: IGame) {
    const gamesRef = collection(this.firestore, 'Games');
    return addDoc(gamesRef, game);
  }

  // deleteGameById
  deleteGame(game: IGame) {
    const gameDocRef = doc(this.firestore, `Games/${game.id}`);
    return deleteDoc(gameDocRef);
  }

  // updateGameById
  updateGame( id : IGame["id"], game : Data,) {
    const gameDocRef = doc(this.firestore, `Games/${id}` )
    return updateDoc(gameDocRef, game);
  }
}