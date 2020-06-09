import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoIllustrationComponent } from './promo-illustration.component';

describe('PromoIllustrationComponent', () => {
  let component: PromoIllustrationComponent;
  let fixture: ComponentFixture<PromoIllustrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoIllustrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
