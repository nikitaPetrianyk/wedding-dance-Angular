import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCardComponent } from './services-card.component';

describe('CardComponent', () => {
  let component: ServicesCardComponent;
  let fixture: ComponentFixture<ServicesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
