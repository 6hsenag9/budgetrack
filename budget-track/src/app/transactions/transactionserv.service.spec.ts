import { TestBed } from '@angular/core/testing';

import { TransactionservService } from './transactionserv.service';

describe('TransactionservService', () => {
  let service: TransactionservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
