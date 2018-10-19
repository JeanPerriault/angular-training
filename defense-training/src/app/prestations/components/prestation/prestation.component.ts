import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestations.model';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})


export class PrestationComponent implements OnInit {

  @Input() item: Prestation;
  public states = Object.values(State);
  public faTrash = faTrash;

  constructor(
    private prestationService: PrestationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.item);
  }


  public updateState(ev: any) {
    const state = ev.target.value;
    this.prestationService.update(this.item, state).then(
      (data) => {
        this.item.state = state;
      }
    );

    // HTTP Calls
    // this.sub = this.prestationService.update(this.item, state).subscribe(
    //   (data) => {
    //     this.item.state = state;
    //   }
    // );
    // don't forget to unsubscribe (dans le complete par exemple => // if (this.sub) {this.sub.unsubscribe})
  }


  public delete() {
    this.prestationService.delete(this.item).then(() => {
      // afficher un mess ou retour api
    });

    // HTTP Calls
    // this.prestationService.delete(this.item).subscribe((data) => {
    //   // afficher un mess ou retour api
    //   // don't forget to unsubscribe
    // });
  }

  public edit() {
    this.router.navigate(['edit/', this.item.id], {relativeTo: this.route});
  }
}
