import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDescriptionComponent } from './block-description.component';

describe('BlockDescriptionComponent', () => {
  let component: BlockDescriptionComponent;
  let fixture: ComponentFixture<BlockDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
