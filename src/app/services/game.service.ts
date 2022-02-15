import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore, DocumentData, doc } from 'firebase/firestore/lite'

@Injectable({
  providedIn: 'root'
})
export class GameService {

constructor() { }

private _firebaseConfig = {
  apiKey: "AIzaSyAebLtpiOB8U5PZ1GOAOebVbSt-8o3keog",
  authDomain: "video-games-b36e4.firebaseapp.com",
  projectId: "video-games-b36e4",
  storageBucket: "video-games-b36e4.appspot.com",
  messagingSenderId: "627992524369",
  appId: "1:627992524369:web:80c3f91b85b0dd4841aa70"
}
app = initializeApp(this._firebaseConfig)
db = getFirestore(this.app);

public async getGames(): Promise<{ data: DocumentData; id: string }[]> {
  
    const gameCol = collection(this.db, 'Games');
    const gameSnapshot = await getDocs(gameCol);
    const gameList = gameSnapshot.docs.map(doc => {;
      return {
      data: doc.data(),
        id: doc.id}
      })
  return gameList
}
}