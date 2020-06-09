import { Component, OnInit } from '@angular/core';
import { QueriesService } from './services/queries.service';
import { Section, Sections } from './interfaces/section.interface';
import { ModalService } from './services/modal.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public sectionsSubscribe: Subscription;
  private sectionsContent: Section[];
  private sectionContent: Section;

  //Sections Content
  public headerSectionData: Section;
  public infoSectionData: Section;
  public serviceSectionData: Section;
  public offerSectionData: Section;
  public coachSectionData: Section;

  //isLoadedData
  public isLoadedAllSections: boolean;

  constructor(
    private queriesService: QueriesService,
    private modalService: ModalService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllSections();
  }

  closeModal(id: string): void {
    this.modalService.close(id);
  }

  getAppropriateSectionData(sectionsContent: Section[], type: string): Section {
    this.sectionContent = sectionsContent.find(item => item.type === type);
    return this.sectionContent;
  }

  checkLogin(): boolean {
    // if (this.authService.logIn) {
    //   this.router.navigate(['profile']);
    // } else {
    //   this.router.navigate(['/']);
    // }
    return this.authService.logIn;
  }

  private getAllSections(): void {
    this.isLoadedAllSections = true;
    this.sectionsSubscribe = <Subscription>(
      this.queriesService.getAllSections().subscribe((data: Sections) => {
        this.sectionsContent = data['content'];
        this.headerSectionData = this.getAppropriateSectionData(
          this.sectionsContent,
          'navigation'
        );
        this.infoSectionData = this.getAppropriateSectionData(
          this.sectionsContent,
          'info'
        );
        this.serviceSectionData = this.getAppropriateSectionData(
          this.sectionsContent,
          'service'
        );
        this.offerSectionData = this.getAppropriateSectionData(
          this.sectionsContent,
          'offer'
        );
        this.coachSectionData = this.getAppropriateSectionData(
          this.sectionsContent,
          'coach'
        );
        this.isLoadedAllSections = false;
      })
    );
  }
}
