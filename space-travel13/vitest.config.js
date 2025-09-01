import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // ← this is the key
    globals: true,         // optional but convenient for things like "describe" and "it"
    setupFiles: './src/Tests/setupTests.js', // optional, for any setup
    include: ['src/Tests/**/*.test.{js,jsx,ts,tsx}'], // specify test files
    converage: {
      reporter: ['text', 'json', 'html'], // specify coverage reporters
    },
  },
});