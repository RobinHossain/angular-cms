import { MagazinesModule } from './magazines.module';

describe('MagazinesModule', () => {
  let magazinesModule: MagazinesModule;

  beforeEach(() => {
    magazinesModule = new MagazinesModule();
  });

  it('should create an instance', () => {
    expect(magazinesModule).toBeTruthy();
  });
});
