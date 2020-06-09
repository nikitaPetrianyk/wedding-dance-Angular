import { Component, OnInit, Input } from '@angular/core';
import {
  SectionAction,
  SectionMeta
} from '../../../interfaces/section.interface';

@Component({
  selector: 'app-promo-description',
  templateUrl: './promo-description.component.html',
  styleUrls: ['./promo-description.component.scss']
})
export class PromoDescriptionComponent implements OnInit {
  @Input() meta: SectionMeta;
  @Input() action: SectionAction;
  constructor() {}

  ngOnInit(): void {}
}
