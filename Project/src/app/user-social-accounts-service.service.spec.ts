import { TestBed } from '@angular/core/testing';

import { UserSocialAccountsServiceService } from './user-social-accounts-service.service';

describe('UserSocialAccountsServiceService', () => {
  let service: UserSocialAccountsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSocialAccountsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
