import { TrelloAuthModule } from './trello-auth.module';

describe('TrelloAuthModule', () => {
  let trelloAuthModule: TrelloAuthModule;

  beforeEach(() => {
    trelloAuthModule = new TrelloAuthModule();
  });

  it('should create an instance', () => {
    expect(trelloAuthModule).toBeTruthy();
  });
});
