/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserDataServiceService } from './user-data-service.service';

describe('UserDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataServiceService]
    });
  });

  it('should ...', inject([UserDataServiceService], (service: UserDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
