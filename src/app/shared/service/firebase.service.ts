import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afd: AngularFirestore) {
  }

  getItems(collection: string) {
    return this.afd.collection(collection).snapshotChanges()
      .pipe(
        map(results => results.map(row => ({
          id: row.payload.doc.id,
          data: row.payload.doc.data()
        })))
      )
  }
}
