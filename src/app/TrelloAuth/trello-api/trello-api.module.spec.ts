import { TrelloApiModule } from './trello-api.module';

describe('TrelloApiModule', () => {
  let trelloApiModule: TrelloApiModule;

  beforeEach(() => {
    trelloApiModule = new TrelloApiModule();
  });

  it('should create an instance', () => {
    expect(trelloApiModule).toBeTruthy();
  });
});
