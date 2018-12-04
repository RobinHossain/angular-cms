import { TradeShowModule } from './trade-show.module';

describe('TradeShowModule', () => {
  let tradeShowModule: TradeShowModule;

  beforeEach(() => {
    tradeShowModule = new TradeShowModule();
  });

  it('should create an instance', () => {
    expect(tradeShowModule).toBeTruthy();
  });
});
