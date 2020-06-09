import { Component, OnInit, Input } from '@angular/core';
import { SectionContent } from '../../../interfaces/section.interface';

@Component({
  selector: 'app-coaches-list',
  templateUrl: './coaches-list.component.html',
  styleUrls: ['./coaches-list.component.scss']
})
export class CoachesListComponent implements OnInit {
  @Input() public content: SectionContent[];

  constructor() {}

  ngOnInit(): void {}
}
