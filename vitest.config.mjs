import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/Daily Coding Challenges/**/test/**/*.test.js'],
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage/daily',
      exclude: ['src/Daily Coding Challenges/**/test/**'],
    },
  },
});
