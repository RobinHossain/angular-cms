import { PollingSurveysModule } from './polling-surveys.module';

describe('PollingSurveysModule', () => {
  let pollingSurveysModule: PollingSurveysModule;

  beforeEach(() => {
    pollingSurveysModule = new PollingSurveysModule();
  });

  it('should create an instance', () => {
    expect(pollingSurveysModule).toBeTruthy();
  });
});
