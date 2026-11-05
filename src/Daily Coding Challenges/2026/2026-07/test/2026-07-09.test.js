import { describe, expect, it } from 'vitest';

import { triageIssue } from '../2026-07-09.js';

describe('triageIssue', () => {
  it('triageIssue("app crashes with error", []) should return ["bug", "needs triage"]', () => {
    expect(triageIssue('app crashes with error', [])).toEqual([
      'bug',
      'needs triage',
    ]);
  });

  it('triageIssue("app crashes with error", ["bug", "needs triage"]) should return ["bug", "help wanted"]', () => {
    expect(
      triageIssue('app crashes with error', ['bug', 'needs triage']),
    ).toEqual(['bug', 'help wanted']);
  });

  it('triageIssue("add dark mode", []) should return ["enhancement", "discussing"]', () => {
    expect(triageIssue('add dark mode', [])).toEqual([
      'enhancement',
      'discussing',
    ]);
  });

  it('triageIssue("add dark mode", ["enhancement", "discussing"]) should return ["enhancement", "help wanted"]', () => {
    expect(triageIssue('add dark mode', ['enhancement', 'discussing'])).toEqual(
      ['enhancement', 'help wanted'],
    );
  });

  it('triageIssue("xss security bug", []) should return ["bug", "needs triage", "critical"]', () => {
    expect(triageIssue('xss security bug', [])).toEqual([
      'bug',
      'needs triage',
      'critical',
    ]);
  });

  it('triageIssue("security vulnerability in auth", []) should return ["critical"]', () => {
    expect(triageIssue('security vulnerability in auth', [])).toEqual([
      'critical',
    ]);
  });

  it('triageIssue("easy a11y fix", ["bug", "needs triage"]) should return ["bug", "good first issue"]', () => {
    expect(triageIssue('easy a11y fix', ['bug', 'needs triage'])).toEqual([
      'bug',
      'good first issue',
    ]);
  });

  it('triageIssue("planned api migration", ["enhancement", "discussing"]) should return ["enhancement", "on the roadmap"]', () => {
    expect(
      triageIssue('planned api migration', ['enhancement', 'discussing']),
    ).toEqual(['enhancement', 'on the roadmap']);
  });

  it('triageIssue("improve security", ["enhancement", "discussing"]) should return ["enhancement", "help wanted", "critical"]', () => {
    expect(
      triageIssue('improve security', ['enhancement', 'discussing']),
    ).toEqual(['enhancement', 'help wanted', 'critical']);
  });
});
