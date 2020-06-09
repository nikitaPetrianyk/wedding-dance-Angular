import { Component, OnInit, Input } from '@angular/core';
import { SectionContent } from '../../../interfaces/section.interface';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnInit {
  @Input() cardContent: SectionContent;
  constructor() {}

  ngOnInit(): void {}
}
