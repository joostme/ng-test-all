import { TestBed } from '@angular/core/testing';

import { TestLibAService } from './test-lib-a.service';

describe('TestLibAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestLibAService = TestBed.get(TestLibAService);
    expect(service).toBeTruthy();
  });
});
