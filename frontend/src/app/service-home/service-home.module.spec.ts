import { ServiceHomeModule } from './service-home.module';

describe('ServiceHomeModule', () => {
  let serviceHomeModule: ServiceHomeModule;

  beforeEach(() => {
    serviceHomeModule = new ServiceHomeModule();
  });

  it('should create an instance', () => {
    expect(serviceHomeModule).toBeTruthy();
  });
});
