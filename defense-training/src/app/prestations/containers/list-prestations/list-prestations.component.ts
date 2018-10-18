import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestations.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { JsonPipe } from '@angular/common';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})


export class ListPrestationsComponent implements OnInit, OnDestroy {

  public headers: string[];
  public faPlus = faPlus;
  public collection: Prestation[];
  // public collection$: Observable<Prestation[]>;
  public sub: Subscription;

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
    // this.collection = this.prestationService.collection$;
    this.sub = this.prestationService.collection$.subscribe((data) => {
      this.collection = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
