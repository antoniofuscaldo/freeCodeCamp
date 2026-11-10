import { describe, expect, it } from 'vitest';

import { getExtension } from '../2026-11-10.js';

describe('getExtension', () => {
  it('getExtension("document.txt") should return "txt"', () => {
    expect(getExtension('document.txt')).toEqual('txt');
  });

  it('getExtension("README") should return "none"', () => {
    expect(getExtension('README')).toEqual('none');
  });

  it('getExtension("image.PNG") should return "PNG"', () => {
    expect(getExtension('image.PNG')).toEqual('PNG');
  });

  it('getExtension(".gitignore") should return "gitignore"', () => {
    expect(getExtension('.gitignore')).toEqual('gitignore');
  });

  it('getExtension("archive.tar.gz") should return "gz"', () => {
    expect(getExtension('archive.tar.gz')).toEqual('gz');
  });

  it('getExtension("final.draft.") should return "none"', () => {
    expect(getExtension('final.draft.')).toEqual('none');
  });
});
