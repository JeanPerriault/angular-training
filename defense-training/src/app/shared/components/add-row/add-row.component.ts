import { Component, OnInit, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-row',
  templateUrl: './add-row.component.html',
  styleUrls: ['./add-row.component.scss']
})


export class AddRowComponent implements OnInit {

  @Input() txt: string;
  public faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
