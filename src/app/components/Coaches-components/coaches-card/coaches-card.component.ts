import { Component, OnInit, Input } from '@angular/core';
import { SectionContent } from '../../../interfaces/section.interface';

@Component({
  selector: 'app-coaches-card',
  templateUrl: './coaches-card.component.html',
  styleUrls: ['./coaches-card.component.scss']
})
export class CoachesCardComponent implements OnInit {
  constructor() {}
  @Input() coachesCard: SectionContent;
  public coachId: string;
  ngOnInit(): void {
    this.coachId = this.coachesCard._id;
  }
}
