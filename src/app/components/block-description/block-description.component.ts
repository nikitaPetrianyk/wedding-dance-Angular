import { Component, OnInit, Input } from '@angular/core';
import { SectionMeta } from '../../interfaces/section.interface';
@Component({
  selector: 'app-block-description',
  templateUrl: './block-description.component.html',
  styleUrls: ['./block-description.component.scss']
})
export class BlockDescriptionComponent implements OnInit {
  constructor() {}
  @Input() meta: SectionMeta;
  ngOnInit(): void {}
}
