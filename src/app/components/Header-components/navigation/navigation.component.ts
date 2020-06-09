import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../../../interfaces/nav-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() public navItems: NavItem[];
  constructor() {}
  ngOnInit(): void {}
}
