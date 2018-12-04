import { SalesMarkettingModule } from './sales-marketting.module';

describe('SalesMarkettingModule', () => {
  let salesMarkettingModule: SalesMarkettingModule;

  beforeEach(() => {
    salesMarkettingModule = new SalesMarkettingModule();
  });

  it('should create an instance', () => {
    expect(salesMarkettingModule).toBeTruthy();
  });
});
