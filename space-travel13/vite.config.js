import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // ← this is the key
    globals: true,         // optional but convenient for things like "describe" and "it"
    setupFiles: './src/Tests/setupTests.js', // optional, for any setup
  },
});
