import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularDataComponent } from './tabular-data.component';

describe('TabularDataComponent', () => {
  let component: TabularDataComponent;
  let fixture: ComponentFixture<TabularDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabularDataComponent]
    });
    fixture = TestBed.createComponent(TabularDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
