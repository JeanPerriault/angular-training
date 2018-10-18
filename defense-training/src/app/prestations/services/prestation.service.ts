import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestations.model';
import { fakeColleciton } from './fake-collection';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})


export class PrestationService {

  private _colleciton: Prestation[];

  constructor() {
    this.collection = fakeColleciton;
    // this.setCollection(fakeColleciton);
  }

  // Get collection
  public get collection (): Prestation[] {
    return this._colleciton;
  }
  // public getCollection (): Prestation[] {
  //   return this.colleciton;
  // }

  // Set collection
  public set collection (col: Prestation[]) {
    this._colleciton = col;
  }
  // public setCollection (col: Prestation[]) {
  //   this.colleciton = col;
  // }

  // Update item in collection
  public update (item: Prestation, state?: State) {
    if (state) {
      item.state = state;
    } else {
      this.collection.push(item);
    }
    console.log(item);
    // this.set(item);
  }

  public delete (item: Prestation): void {
    console.log('delete ' + item.id);
  }

  // Add item in collection
  public addItem (item: Prestation): void {
    this.collection.push(new Prestation(item));
  }

  // Get colleciton item by id
  public getItemById() {

  }
}
