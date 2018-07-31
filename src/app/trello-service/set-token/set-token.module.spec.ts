import { SetTokenModule } from './set-token.module';

describe('SetTokenModule', () => {
  let setTokenModule: SetTokenModule;

  beforeEach(() => {
    setTokenModule = new SetTokenModule();
  });

  it('should create an instance', () => {
    expect(setTokenModule).toBeTruthy();
  });
});
