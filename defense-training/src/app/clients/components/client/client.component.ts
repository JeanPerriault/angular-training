import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/models/clients.model';
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})


export class ClientComponent implements OnInit {

  @Input() item: Client;
  public clientStates = Object.values(ClientState);
  public faTrash = faTrash;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.item);
  }

  public updateState(ev: any) {
    const state = ev.target.value;
    this.clientService.update(this.item, state).then(() => {
      this.item.state = state;
    });
  }

  public delete() {
    this.clientService.delete(this.item).then(() => {
      // afficher un mess ou retour api
    });
  }

  public getDetails() {
    this.router.navigate(['details'], { relativeTo: this.route });
    this.clientService.item.next(this.item);
    console.log(this.clientService.item);
  }
}
