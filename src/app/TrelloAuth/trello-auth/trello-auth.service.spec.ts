import { TestBed, inject } from '@angular/core/testing';
import { TrelloAuthService } from './';

describe('TrelloAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrelloAuthService]
    });
  });

  it('should be created', inject([TrelloAuthService], (service: TrelloAuthService) => {
    expect(service).toBeTruthy();
  }));
});
