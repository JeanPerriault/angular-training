import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/clients.model';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})


export class ClientComponent implements OnInit {

  @Input() item: Client;
  public clientStates = Object.values(ClientState);

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    console.log(this.item);
  }

  public updateState(ev: any) {
    const state = ev.target.value;
    this.clientService.update(this.item, state);
  }
}
