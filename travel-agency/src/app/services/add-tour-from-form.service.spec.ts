import { TestBed } from '@angular/core/testing';

import { AddTourFromFormService } from './add-tour-from-form.service';

describe('AddTourFromFormService', () => {
  let service: AddTourFromFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTourFromFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
