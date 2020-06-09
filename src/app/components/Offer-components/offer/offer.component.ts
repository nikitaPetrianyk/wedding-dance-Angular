import { Component, OnInit, Input } from '@angular/core';
import {
  Section,
  SectionMeta,
  SectionContent
} from '../../../interfaces/section.interface';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  @Input() private sectionContent: Section;
  constructor() {}

  getMeta(): SectionMeta {
    return this.sectionContent.meta;
  }

  getContent(): SectionContent[] {
    return this.sectionContent.content;
  }

  ngOnInit(): void {}
}
