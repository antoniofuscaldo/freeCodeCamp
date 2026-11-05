import { describe, expect, it } from 'vitest';

import { reverseSentence } from '../2026-09-11.js';

describe('reverseSentence', () => {
  it('reverseSentence("world hello") should return "hello world"', () => {
    expect(reverseSentence('world hello')).toEqual('hello world');
  });

  it('reverseSentence("push commit git") should return "git commit push"', () => {
    expect(reverseSentence('push commit git')).toEqual('git commit push');
  });

  it('reverseSentence("npm  install  sudo") should return "sudo install npm"', () => {
    expect(reverseSentence('npm  install  sudo')).toEqual('sudo install npm');
  });

  it('reverseSentence("import    default   function  export") should return "export function default import"', () => {
    expect(reverseSentence('import    default   function  export')).toEqual(
      'export function default import',
    );
  });
});
