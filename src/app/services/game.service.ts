import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,  DocumentData} from 'firebase/firestore/lite'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
 

  constructor(private firestore : AngularFirestore) { 
  }

app = initializeApp(environment.firebaseConfig)
db = getFirestore(this.app);

// Function getAllGames 
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

form = new FormGroup({
  name: new FormControl('', Validators.required),
  img_url: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required),
})

public async addGame(data : any): Promise<void> {
  return new Promise<any>((resolve, reject) => {
    // error handling in the case of missing data
    if (!data.name && !data.img_url && !data.description) {
      return reject(new Error("Enter value"));
    }
    // add data entered to the collection 
    this.firestore
      .collection("Games")
      .add(data)
      .then((res: any) => resolve(res), (err: any) => reject(err))
  })
}



}