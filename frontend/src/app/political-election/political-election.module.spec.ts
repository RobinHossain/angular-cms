import { PoliticalElectionModule } from './political-election.module';

describe('PoliticalElectionModule', () => {
  let politicalElectionModule: PoliticalElectionModule;

  beforeEach(() => {
    politicalElectionModule = new PoliticalElectionModule();
  });

  it('should create an instance', () => {
    expect(politicalElectionModule).toBeTruthy();
  });
});
