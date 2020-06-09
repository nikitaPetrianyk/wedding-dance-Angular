import { Component, OnInit, Input } from '@angular/core';
import { SectionContent } from '../../../interfaces/section.interface';

export interface OfferCard {
  icoClass: string;
  info: string;
}

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {
  @Input() content: SectionContent;
  constructor() {}

  ngOnInit(): void {}
}
