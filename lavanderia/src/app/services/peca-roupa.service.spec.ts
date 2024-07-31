import { TestBed } from '@angular/core/testing';

import { PecaRoupaService } from './peca-roupa.service';

describe('PecaRoupaService', () => {
  let service: PecaRoupaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PecaRoupaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
