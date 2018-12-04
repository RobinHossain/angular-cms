import { CharitiesModule } from './charities.module';

describe('CharitiesModule', () => {
  let charitiesModule: CharitiesModule;

  beforeEach(() => {
    charitiesModule = new CharitiesModule();
  });

  it('should create an instance', () => {
    expect(charitiesModule).toBeTruthy();
  });
});
