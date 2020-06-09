import { Component, OnInit, Input } from '@angular/core';
import {
  Section,
  SectionMeta,
  SectionContent,
  SectionAction
} from '../../../interfaces/section.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() private sectionContent: Section;

  public isVisible: boolean = false;

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

  toggleMenu(): void {
    this.isVisible = !this.isVisible;
  }

  ngOnInit(): void {}
}
