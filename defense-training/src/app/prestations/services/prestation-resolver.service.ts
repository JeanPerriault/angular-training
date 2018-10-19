import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PrestationService } from './prestation.service';
import { Observable, EMPTY, of } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestations.model';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class PrestationResolverService implements Resolve<Prestation> {

  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prestation> | Observable<never> {
    const id = route.paramMap.get('id');
console.log('erere');
    return this.prestationService.getPrestation(id).pipe(
      take(1),
      mergeMap(presta => {
        if (presta) {
          return of(presta);
        } else { // id not found
          this.router.navigate(['/prestations']);
          return EMPTY;
        }
      })
    );
  }






  // public item: Observable<Prestation>;

  // constructor(
  //   private prestationService: PrestationService,
  //   private route: ActivatedRoute
  // ) { }


  // resolve (id: string): void {
  //   this.prestationService.getPrestation(id).then((data) => {
  //     // If and else using api or display message
  //     this.router.navigate(['prestations']);
  //   });
  // }
}
