import { TestBed } from '@angular/core/testing';

import { TestLibBService } from './test-lib-b.service';

describe('TestLibBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestLibBService = TestBed.get(TestLibBService);
    expect(service).toBeTruthy();
  });
});
