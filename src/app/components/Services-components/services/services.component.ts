import { Component, OnInit, Input } from '@angular/core';
import {
  Section,
  SectionMeta,
  SectionContent
} from '../../../interfaces/section.interface';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
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
