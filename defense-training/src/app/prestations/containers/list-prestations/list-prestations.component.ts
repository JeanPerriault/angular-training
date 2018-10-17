import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestations.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})


export class ListPrestationsComponent implements OnInit {

  public headers: string[];
  public collection: Prestation[];
  public faPlus = faPlus;

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
      'Action',
      'Delete'
    ];
    this.collection = this.prestationService.collection;
  }

}
