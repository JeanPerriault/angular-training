import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/clients.model';
import { fakeColleciton } from './fake-collection';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class ClientService {

  // private _colleciton: Client[];
  private _collection$: Observable<Client[]>;
  public item: BehaviorSubject<Client> = new BehaviorSubject(null);

  private itemsCollection: AngularFirestoreCollection<Client>;

  constructor(
    private afs: AngularFirestore
  ) {
    // this.collection = fakeColleciton;
    this.itemsCollection = afs.collection<Client>('clients');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      // map((data) => {
      //   return data.map((item) => {
      //     return new Prestation(item);
      //   });
      // })
      // map(data => data.map(item => new Client(item)))
      tap((data) => {
        console.log(data);
        this.item.next(data[0]);
      })
    );

    // this.item = new BehaviorSubject(this._collection[0]);
  }

  // Get collection
  public get collection$ (): Observable<Client[]> {
    return this._collection$;
  }

  // Set collection
  public set collection$ (col: Observable<Client[]>) {
    this._collection$ = col;
  }


  // add presta
  add(item: Client): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post('urlapi/prestations', item);
  }


  update(item: Client, state?: ClientState): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/prestations/'+item.id, presta);
  }

  public delete(item: Client): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  getPrestation(id: string): Observable<Client> {
    return this.itemsCollection.doc<Client>(id).valueChanges();
    // return this.http.get(`urlaspi/prestations/${id}`);
  }








  // Update item in collection
  // public update (item: Client, state: ClientState) {
  //   item.state = state;
  // }

  // public delete (item: Client): void {
  //   console.log('delete ' + item.id);
  // }

  // // Add item in collection
  // public addItem () {

  // }

  // Get colleciton item by id
  public getItemById() {

  }
}
