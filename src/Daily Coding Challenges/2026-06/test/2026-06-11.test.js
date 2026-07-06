import { describe, expect, it } from 'vitest';

import { analyzeIdeas } from '../2026-06-11.js';

describe('analyzeIdeas', () => {
  it('analyzeIdeas([["Add logging", 2, 5, 15], ["SEO optimization", 4, 8, 20], ["Fix bug", 1, 3, 5]]) should return ["Fix bug", "Add logging", "SEO optimization"]', () => {
    expect(
      analyzeIdeas([
        ['Add logging', 2, 5, 15],
        ['SEO optimization', 4, 8, 20],
        ['Fix bug', 1, 3, 5],
      ]),
    ).toEqual(['Fix bug', 'Add logging', 'SEO optimization']);
  });

  it('analyzeIdeas([["Dark mode", 1, 3, 8], ["Real-time collaboration feature", 6, 12, 20], ["Add tooltip", 1, 2, 4]]) should return ["Add tooltip", "Dark mode", "Real-time collaboration feature"]', () => {
    expect(
      analyzeIdeas([
        ['Dark mode', 1, 3, 8],
        ['Real-time collaboration feature', 6, 12, 20],
        ['Add tooltip', 1, 2, 4],
      ]),
    ).toEqual(['Add tooltip', 'Dark mode', 'Real-time collaboration feature']);
  });

  it('analyzeIdeas([["Update user profile page", 3, 7, 14], ["Add pagination", 2, 5, 10], ["Add tags", 2, 3, 6], ["Fix login bug", 1, 4, 8]]) should return ["Add tags", "Fix login bug", "Add pagination", "Update user profile page"]', () => {
    expect(
      analyzeIdeas([
        ['Update user profile page', 3, 7, 14],
        ['Add pagination', 2, 5, 10],
        ['Add tags', 2, 3, 6],
        ['Fix login bug', 1, 4, 8],
      ]),
    ).toEqual([
      'Add tags',
      'Fix login bug',
      'Add pagination',
      'Update user profile page',
    ]);
  });

  it('analyzeIdeas([["Migrate database", 14, 25, 40], ["Add chat assistant", 8, 15, 24], ["Redesign onboarding flow", 3, 7, 13], ["Add language support", 6, 11, 18]]) should return ["Redesign onboarding flow", "Add language support", "Add chat assistant", "Migrate database"]', () => {
    expect(
      analyzeIdeas([
        ['Migrate database', 14, 25, 40],
        ['Add chat assistant', 8, 15, 24],
        ['Redesign onboarding flow', 3, 7, 13],
        ['Add language support', 6, 11, 18],
      ]),
    ).toEqual([
      'Redesign onboarding flow',
      'Add language support',
      'Add chat assistant',
      'Migrate database',
    ]);
  });

  it('analyzeIdeas([["Add email notifications", 3, 7, 10], ["Migrate deployment flow", 6, 10, 16], ["Add push notifications", 2, 6, 10], ["Optimize continuous integration", 5, 8, 15], ["Analyze user patterns", 5, 10, 18], ["Create onboarding curriculum", 6, 15, 25]]) should return ["Add push notifications", "Add email notifications", "Analyze user patterns", "Migrate deployment flow", "Optimize continuous integration", "Create onboarding curriculum"]', () => {
    expect(
      analyzeIdeas([
        ['Add email notifications', 3, 7, 10],
        ['Migrate deployment flow', 6, 10, 16],
        ['Add push notifications', 2, 6, 10],
        ['Optimize continuous integration', 5, 8, 15],
        ['Analyze user patterns', 5, 10, 18],
        ['Create onboarding curriculum', 6, 15, 25],
      ]),
    ).toEqual([
      'Add push notifications',
      'Add email notifications',
      'Analyze user patterns',
      'Migrate deployment flow',
      'Optimize continuous integration',
      'Create onboarding curriculum',
    ]);
  });
});
