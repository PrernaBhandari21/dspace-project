import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataUploadComponent } from './user-data-upload.component';

describe('UserDataUploadComponent', () => {
  let component: UserDataUploadComponent;
  let fixture: ComponentFixture<UserDataUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDataUploadComponent]
    });
    fixture = TestBed.createComponent(UserDataUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
