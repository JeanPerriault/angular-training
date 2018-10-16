import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestations.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})


export class ListPrestationsComponent implements OnInit {

  public headers: string[];
  public collection: Prestation[];

  constructor(
    private prestationService: PrestationService,
    // private jsonPipe: JsonPipe
  ) { }

  ngOnInit() {
    this.headers = [
      '#',
      'Type',
      'Client',
      'Nb Jours',
      'TJM HT',
      'Total HT',
      'Total TTC',
      'Action'
    ];
    this.collection = this.prestationService.collection;
  }

}
