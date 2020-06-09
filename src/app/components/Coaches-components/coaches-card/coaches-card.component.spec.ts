import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesCardComponent } from './coaches-card.component';

describe('CoachesCardComponent', () => {
  let component: CoachesCardComponent;
  let fixture: ComponentFixture<CoachesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
