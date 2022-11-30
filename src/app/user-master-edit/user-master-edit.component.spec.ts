import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMasterEditComponent } from './user-master-edit.component';

describe('UserMasterEditComponent', () => {
  let component: UserMasterEditComponent;
  let fixture: ComponentFixture<UserMasterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMasterEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMasterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
