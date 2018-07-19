import { TestBed, inject } from '@angular/core/testing';
import { TrelloService } from './';

describe('TrelloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrelloService]
    });
  });

  it('should be created', inject([TrelloService], (service: TrelloService) => {
    expect(service).toBeTruthy();
  }));
});
