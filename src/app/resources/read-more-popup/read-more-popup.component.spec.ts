import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMorePopupComponent } from './read-more-popup.component';

describe('ReadMorePopupComponent', () => {
  let component: ReadMorePopupComponent;
  let fixture: ComponentFixture<ReadMorePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadMorePopupComponent]
    });
    fixture = TestBed.createComponent(ReadMorePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
