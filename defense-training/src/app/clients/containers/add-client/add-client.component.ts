import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/clients.model';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item: Client): void {
    console.log(item);
    this.clientService.add(item).then((data) => {
      // If and else using api
      this.router.navigate(['clients']);
    });
  }
}
