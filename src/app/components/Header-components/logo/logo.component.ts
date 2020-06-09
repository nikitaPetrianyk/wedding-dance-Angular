import { Component, OnInit, Input } from '@angular/core';
import { SectionMeta } from '../../../interfaces/section.interface';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() private meta: SectionMeta;

  constructor() {}

  getTitle(): string {
    return this.meta.title;
  }

  ngOnInit(): void {}
}
