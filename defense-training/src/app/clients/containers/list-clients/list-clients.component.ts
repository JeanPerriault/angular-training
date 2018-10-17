import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/shared/models/clients.model';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})


export class ListClientsComponent implements OnInit {

  public headers: string[];
  public collection: Client[];

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
      'Action'
    ];
    this.collection = this.clientService.collection;
  }

}
