import { TestBed } from '@angular/core/testing';

import { UserMasterEditService } from './user-master-edit.service';

describe('UserMasterEditService', () => {
  let service: UserMasterEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMasterEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
