import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/shared/models/clients.model';


@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.scss']
})


export class DetailsClientComponent implements OnInit {

  public item: Client;


  constructor(
    private cs: ClientService
  ) { }


  ngOnInit() {
    this.cs.item.subscribe((data) => {
      this.item = data;
    });
  }
}
