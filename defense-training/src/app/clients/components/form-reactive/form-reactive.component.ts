import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/models/clients.model';


@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})


export class FormReactiveComponent implements OnInit {

  public states = Object.values(ClientState);
  @Output() newItem: EventEmitter<Client> = new EventEmitter();
  public addForm: FormGroup;
  private init = new Client();


  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.createForm();
  }

  // 'Nom',
  //     'Adresse',
  //     'Code postal',
  //     'Ville',
  //     'TJM HT',
  //     'Action',
  //     'Delete'

  private createForm() {
    this.addForm = this.fb.group({
      nom: [
        this.init.nom,
        Validators.required
      ],
      adresse: [
        this.init.adresse,
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ],
      codePostal: [
        this.init.codePostal
      ],
      tjm_ht: [
        this.init.tjm_ht
      ],
      tva: [
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
