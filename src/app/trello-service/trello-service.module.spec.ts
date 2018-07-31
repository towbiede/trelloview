import { TrelloServiceModule } from './trello-service.module';

describe('TrelloServiceModule', () => {
  let trelloServiceModule: TrelloServiceModule;

  beforeEach(() => {
    trelloServiceModule = new TrelloServiceModule();
  });

  it('should create an instance', () => {
    expect(trelloServiceModule).toBeTruthy();
  });
});
