import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestations.model';
import { fakeColleciton } from './fake-collection';
import { State } from 'src/app/shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class PrestationService {

  private _collection$: Observable<Prestation[]>;

  private itemsCollection: AngularFirestoreCollection<Prestation>;

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
  ) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      // map((data) => {
      //   return data.map((item) => {
      //     return new Prestation(item);
      //   });
      // })
      map(data => data.map(item => new Prestation(item)))
    );
    // this.collection = fakeColleciton;
    // this.setCollection(fakeColleciton);

    // For http calls
    // this.collection$ = this.http.get<Prestation[]>('url_api/prestations').pipe(
    //   map(data => data.map(item => new Prestation(item)))
    // );
  }

  // Get collection
  public get collection$ (): Observable<Prestation[]> {
    return this._collection$;
  }
  // public getCollection (): Prestation[] {
  //   return this.colleciton;
  // }

  // Set collection
  public set collection$ (col: Observable<Prestation[]>) {
    this._collection$ = col;
  }
  // public setCollection (col: Prestation[]) {
  //   this.colleciton = col;
  // }

  // Update item in collection
  // public update (item: Prestation, state?: State) {
  //   if (state) {
  //     item.state = state;
  //   }
  //   // else {
  //   //   this.collection$.push(item);
  //   // }
  //   // console.log(item);
  //   // this.set(item);
  // }

  // public delete (item: Prestation): void {
  //   console.log('delete ' + item.id);
  // }

  // // Add item in collection
  // public addItem (item: Prestation): void {
  //   // this.collection.push(new Prestation(item));
  // }

  // // Get colleciton item by id
  // public getItemById() {

  // }




  // add presta
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });

    // Http add
    // return this.http.post('url_api/prestations', item);
  }


  update(item: Prestation, state?: State): Promise<any> {
    // create a new object, with item attributes
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });

    // Http update
    // return this.http.patch('url_api/prestations/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });

    // Http delete
    // return this.http.delete(`url_api/prestations/${item.id}`);
  }

  public getPrestation(id: string): Observable<Prestation> {
    const pre = this.itemsCollection.doc<Prestation>(id).valueChanges();
    console.log(pre);

    return this.itemsCollection.doc<Prestation>(id).valueChanges().pipe(
      // map((data) => {
      //   return data.map((item) => {
      //     return new Prestation(item);
      //   });
      // })
      map(item => new Prestation(item))
    );

    // Http get item by id
    // return this.http.get(`url_api/prestations/${id}`);
  }
}
