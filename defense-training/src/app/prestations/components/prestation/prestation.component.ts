import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestations.model';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})


export class PrestationComponent implements OnInit {

  @Input() item: Prestation;
  public states = Object.values(State);
  public faTrash = faTrash;

  constructor(private prestationService: PrestationService) { }

  ngOnInit() {
    console.log(this.item);
  }

  public updateState(ev: any) {
    const state = ev.target.value;
    this.prestationService.update(this.item, state);
  }
}
