/**

Idea Rankings

Given a 2D array where each inner array contains (in this order) an idea name, an optimistic estimate, a realistic estimate, and a pessimistic estimate (in days), return an array of the idea names sorted by expected time to completion, shortest first.

Calculate the expected time to completion for each idea using the following formula:

expected = ((optimistic + 4 * realistic + pessimistic) / 6) * length of idea name

Tests:
Waiting:1. analyzeIdeas([["Add logging", 2, 5, 15], ["SEO optimization", 4, 8, 20], ["Fix bug", 1, 3, 5]]) should return ["Fix bug", "Add logging", "SEO optimization"].
Waiting:2. analyzeIdeas([["Dark mode", 1, 3, 8], ["Real-time collaboration feature", 6, 12, 20], ["Add tooltip", 1, 2, 4]]) should return ["Add tooltip", "Dark mode", "Real-time collaboration feature"].
Waiting:3. analyzeIdeas([["Update user profile page", 3, 7, 14], ["Add pagination", 2, 5, 10], ["Add tags", 2, 3, 6], ["Fix login bug", 1, 4, 8]]) should return ["Add tags", "Fix login bug", "Add pagination", "Update user profile page"].
Waiting:4. analyzeIdeas([["Migrate database", 14, 25, 40], ["Add chat assistant", 8, 15, 24], ["Redesign onboarding flow", 3, 7, 13], ["Add language support", 6, 11, 18]]) should return ["Redesign onboarding flow", "Add language support", "Add chat assistant", "Migrate database"].
Waiting:5. analyzeIdeas([["Add email notifications", 3, 7, 10], ["Migrate deployment flow", 6, 10, 16], ["Add push notifications", 2, 6, 10], ["Optimize continuous integration", 5, 8, 15], ["Analyze user patterns", 5, 10, 18], ["Create onboarding curriculum", 6, 15, 25]]) should return ["Add push notifications", "Add email notifications", "Analyze user patterns", "Migrate deployment flow", "Optimize continuous integration", "Create onboarding curriculum"].

*/

export function analyzeIdeas(ideas) {
  return ideas
    .map((i) => {
      const [name, o, r, p] = i;
      const expected = ((o + 4 * r + p) / 6) * name.length;
      return { name, expected };
    })
    .sort((a, b) => a.expected - b.expected)
    .map((x) => x.name);
}
