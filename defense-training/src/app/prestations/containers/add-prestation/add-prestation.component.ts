import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestations.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  public add(item: Prestation): void {
    console.log(item);
    this.prestationService.add(item).then((data) => {
      // If and else using api or display message
      this.router.navigate(['prestations']);
    });

    // HTTP calls
    // this.prestationService.add(item).subscribe((data) => {
    //   // If and else using api or display message
    //   this.router.navigate(['prestations']);
    // });
  }
}
