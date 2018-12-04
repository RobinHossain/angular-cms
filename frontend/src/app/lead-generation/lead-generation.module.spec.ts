import { LeadGenerationModule } from './lead-generation.module';

describe('LeadGenerationModule', () => {
  let leadGenerationModule: LeadGenerationModule;

  beforeEach(() => {
    leadGenerationModule = new LeadGenerationModule();
  });

  it('should create an instance', () => {
    expect(leadGenerationModule).toBeTruthy();
  });
});
