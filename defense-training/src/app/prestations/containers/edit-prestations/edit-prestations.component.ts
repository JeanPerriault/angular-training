import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestations.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-edit-prestations',
  templateUrl: './edit-prestations.component.html',
  styleUrls: ['./edit-prestations.component.scss']
})
export class EditPrestationsComponent implements OnInit {

  @Input() presta: Prestation;

  constructor(
    private prestationService: PrestationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { item: Prestation }) => {
        this.presta = data.item;
      });
  }

  public edit(item: Prestation) {
    item.id = this.presta.id;
    this.prestationService.update(item).then((data) => {
      this.router.navigate(['prestations']);
    });
  }
}
