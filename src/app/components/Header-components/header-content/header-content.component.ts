import { Component, OnInit, Input } from '@angular/core';
import { SectionAction } from '../../../interfaces/section.interface';
import { ModalService } from '../../../services/modal.service';
import { NavItem } from 'src/app/interfaces/nav-item';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.scss']
})
export class HeaderContentComponent implements OnInit {
  @Input() content: NavItem[];
  @Input() action: SectionAction;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}
  openModal(id: string) {
    this.modalService.open(id);
  }
}
