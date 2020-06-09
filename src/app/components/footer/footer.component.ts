import { Component, OnInit, Input } from '@angular/core';
import { Section, SectionMeta } from 'src/app/interfaces/section.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() private sectionContent: Section;

  constructor() {}

  getMeta(): SectionMeta {
    return this.sectionContent.meta;
  }
  ngOnInit(): void {}
}
