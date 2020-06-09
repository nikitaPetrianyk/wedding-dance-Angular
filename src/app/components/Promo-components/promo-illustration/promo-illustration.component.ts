import { Component, OnInit, Input } from '@angular/core';
import { SectionMeta } from 'src/app/interfaces/section.interface';

@Component({
  selector: 'app-promo-illustration',
  templateUrl: './promo-illustration.component.html',
  styleUrls: ['./promo-illustration.component.scss']
})
export class PromoIllustrationComponent implements OnInit {
  @Input() meta: SectionMeta;
  url: string;
  path: string;
  constructor() {}

  getUrl(): string {
    return this.meta.heroImage;
  }

  ngOnInit(): void {
    this.url = this.getUrl();
    this.path = `../../../../assets/img${this.url}`;
  }
}
