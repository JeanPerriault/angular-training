import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/shared/models/clients.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})


export class ListClientsComponent implements OnInit {

  public headers: string[];
  // public collection: Client[];
  public collection$: Observable<Client[]>;

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit() {
    this.headers = [
      '#',
      'Nom',
      'Adresse',
      'Code postal',
      'Ville',
      'TJM HT',
      'Action',
      'Delete'
    ];
    this.collection$ = this.clientService.collection$;
  }
}
