import { Component, OnInit, Input } from '@angular/core';
import { SectionContent } from '../../../interfaces/section.interface';

@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss']
})
export class ServicesCardComponent implements OnInit {
  @Input() public cardContent: SectionContent;
  constructor() {}
  public url: string;
  ngOnInit(): void {
    this.url = `../../../../assets/img${this.cardContent.url}.jpg`;
  }
}
