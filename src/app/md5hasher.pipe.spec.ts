import { Md5hasherPipe } from './md5hasher.pipe';

describe('Md5hasherPipe', () => {
  it('create an instance', () => {
    const pipe = new Md5hasherPipe();
    expect(pipe).toBeTruthy();
  });
});
