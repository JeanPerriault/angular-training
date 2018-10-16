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
  public update (item: Prestation, state: State) {
    item.state = state;
    console.log(item);
    // this.set(item);
  }

  // Add item in collection
  public addItem () {

  }

  // Get colleciton item by id
  public getItemById() {

  }
}
