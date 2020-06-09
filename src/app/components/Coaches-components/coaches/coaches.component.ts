import { Component, OnInit, Input } from '@angular/core';
import {
  Section,
  SectionMeta,
  SectionContent
} from '../../../interfaces/section.interface';
import { AuthService } from '../../../services/auth.service';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  @Input() public sectionContent: Section;

  public isAuthorized: boolean;

  constructor(
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  getMeta(): SectionMeta {
    return this.sectionContent.meta;
  }

  getContent(): SectionContent[] {
    return this.sectionContent.content;
  }

  openModal(id: string): void {
    this.modalService.open(id);
  }

  closeModal(id: string): void {
    this.modalService.close(id);
  }

  checkLogin(): boolean {
    return this.authService.logIn;
  }

  ngOnInit(): void {
    this.checkLogin();
  }
}
