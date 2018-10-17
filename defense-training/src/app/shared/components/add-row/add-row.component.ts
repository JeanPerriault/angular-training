import { Component, OnInit, Input } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-row',
  templateUrl: './add-row.component.html',
  styleUrls: ['./add-row.component.scss']
})


export class AddRowComponent implements OnInit {

  @Input() txt: string;
  public faPlusSquare = faPlusSquare;

  constructor() { }

  ngOnInit() {
  }

}
