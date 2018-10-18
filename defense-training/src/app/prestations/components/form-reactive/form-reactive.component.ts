import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestations.model';


@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})


export class FormReactiveComponent implements OnInit {

  public states = Object.values(State);
  @Output() newItem: EventEmitter<Prestation> = new EventEmitter();
  public addForm: FormGroup;
  private init = new Prestation();


  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.createForm();
  }


  private createForm() {
    this.addForm = this.fb.group({
      type_presta: [
        this.init.type_presta,
        Validators.required
      ],
      client: [
        this.init.client,
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ],
      nb_jours: [
        this.init.nb_jours
      ],
      tjm_ht: [
        this.init.tjm_ht
      ],
      taux_tva: [
        this.init.taux_tva
      ],
      state: [
        this.init.state
      ]
    });
  }


  public process () {
    console.error('process for reactive called');
    this.newItem.emit(this.addForm.value);
  }


  public isError (fieldName: string): boolean {
    return this.addForm.get(fieldName).invalid && this.addForm.get(fieldName).touched;
  }
}
