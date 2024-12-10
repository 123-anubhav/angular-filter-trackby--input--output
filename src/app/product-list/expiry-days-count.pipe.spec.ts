import { ExpiryDaysCountPipe } from './expiry-days-count.pipe';

describe('ExpiryDaysCountPipe', () => {
  it('create an instance', () => {
    const pipe = new ExpiryDaysCountPipe();
    expect(pipe).toBeTruthy();
  });
});
