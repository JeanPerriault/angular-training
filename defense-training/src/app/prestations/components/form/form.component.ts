import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestations.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {

  public states = Object.values(State);
  @Output() newItem: EventEmitter<Prestation> = new EventEmitter();
  public init = new Prestation();

  constructor() { }

  ngOnInit() {
  }

  public process () {
    console.error('process called');
    this.newItem.emit(this.init);
  }
}
