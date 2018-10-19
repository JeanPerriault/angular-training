import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialButtonsComponent implements OnChanges {

  public providerLink: string;
  @Input() link: string;
  @Input() provider: string;

  constructor() { }

  ngOnChanges() {
    this.providerLink = `fab fa-${this.provider}`;
  }
}
