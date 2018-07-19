import { TestBed, inject } from '@angular/core/testing';
import { TrelloAuthService } from './trello-auth.service';

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
