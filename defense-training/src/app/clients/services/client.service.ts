import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/clients.model';
import { fakeColleciton } from './fake-collection';
import { ClientState } from 'src/app/shared/enums/client-state.enum';

@Injectable({
  providedIn: 'root'
})


export class ClientService {

  private _colleciton: Client[];

  constructor() {
    this.collection = fakeColleciton;
  }

  // Get collection
  public get collection (): Client[] {
    return this._colleciton;
  }

  // Set collection
  public set collection (col: Client[]) {
    this._colleciton = col;
  }

  // Update item in collection
  public update (item: Client, state: ClientState) {
    item.state = state;
  }

  // Add item in collection
  public addItem () {

  }

  // Get colleciton item by id
  public getItemById() {

  }
}
