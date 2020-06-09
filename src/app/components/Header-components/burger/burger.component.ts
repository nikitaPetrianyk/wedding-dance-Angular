import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  @Output() public toggleMenu = new EventEmitter<void>();

  toggle(): void {
    this.toggleMenu.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
