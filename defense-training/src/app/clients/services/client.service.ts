import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/clients.model';
import { fakeColleciton } from './fake-collection';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ClientService {

  private _colleciton: Client[];
  public item: BehaviorSubject<Client>;

  constructor() {
    this.collection = fakeColleciton;
    this.item = new BehaviorSubject(this._colleciton[0]);
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

  public delete (item: Client): void {
    console.log('delete ' + item.id);
  }

  // Add item in collection
  public addItem () {

  }

  // Get colleciton item by id
  public getItemById() {

  }
}
