import { Component, OnInit, Input } from '@angular/core';
import {
  Section,
  SectionMeta,
  SectionContent,
  SectionAction
} from '../../../interfaces/section.interface';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  @Input() sectionContent: Section;
  constructor() {}
  getMeta(): SectionMeta {
    return this.sectionContent.meta;
  }

  getContent(): SectionContent[] {
    return this.sectionContent.content;
  }

  getAction(): SectionAction {
    return this.sectionContent.action;
  }

  ngOnInit(): void {}
}
