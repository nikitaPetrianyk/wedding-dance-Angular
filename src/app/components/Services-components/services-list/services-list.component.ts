import { Component, OnInit, Input } from '@angular/core';
import { SectionContent } from '../../../interfaces/section.interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  @Input() content: SectionContent;
  constructor() {}

  ngOnInit(): void {}
}
