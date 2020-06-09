import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from 'src/app/interfaces/nav-item';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent implements OnInit {
  constructor() {}
  @Input() navItem: NavItem;
  ngOnInit(): void {}
}
