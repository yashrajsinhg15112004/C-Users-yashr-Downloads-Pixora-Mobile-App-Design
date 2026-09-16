import { defineConfig } from 'vite';
import react from '@vitejs.plugin-react';
import fs from 'fs';
import path from 'path';

let siteConfiguration = {};

// Safely attempt to load the file if it exists
const configPath = path.resolve(__dirname, '.figma/make/site.json');
if (fs.existsSync(configPath)) {
  try {
    siteConfiguration = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  } catch (e) {
    console.warn('Could not parse site.json, using empty config fallback.');
  }
}

export default defineConfig({
  plugins: [react()],
  // Use siteConfiguration here if needed
});
