import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../../interfaces/nav-item';
import { SectionAction } from '../../interfaces/section.interface';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  @Input() public content: NavItem[];
  @Input() public action: SectionAction;

  constructor() {}

  ngOnInit(): void {}
}
