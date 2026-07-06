import { describe, expect, it } from 'vitest';

import { getOpenIssues } from '../2026-05-23.js';

describe('getOpenIssues', () => {
  it('getOpenIssues([123, 234], [231]) should return [234]', () => {
    expect(getOpenIssues([123, 234], [231])).toEqual([234]);
  });

  it('getOpenIssues([123, 345, 16], [345, 231]) should return [345, 16]', () => {
    expect(getOpenIssues([123, 345, 16], [345, 231])).toEqual([345, 16]);
  });

  it('getOpenIssues([456, 332, 12, 15], [201, 945, 180]) should return [456, 332, 15]', () => {
    expect(getOpenIssues([456, 332, 12, 15], [201, 945, 180])).toEqual([
      456, 332, 15,
    ]);
  });

  it('getOpenIssues([12, 115, 296, 170, 24], [17, 18, 19, 20, 21]) should return [115, 296, 24]', () => {
    expect(
      getOpenIssues([12, 115, 296, 170, 24], [17, 18, 19, 20, 21]),
    ).toEqual([115, 296, 24]);
  });

  it('getOpenIssues([19, 95, 422, 395, 754, 102, 296, 709, 237, 4400, 1802], [395, 440, 9001, 95, 242, 21, 287, 169, 14]) should return [95, 395, 754, 296, 709, 237, 1802]', () => {
    expect(
      getOpenIssues(
        [19, 95, 422, 395, 754, 102, 296, 709, 237, 4400, 1802],
        [395, 440, 9001, 95, 242, 21, 287, 169, 14],
      ),
    ).toEqual([95, 395, 754, 296, 709, 237, 1802]);
  });
});
