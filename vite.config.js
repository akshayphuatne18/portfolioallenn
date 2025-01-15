import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/allenngkportfolio",  // Ensure the base path is set correctly
  build: {
    outDir: 'dist',  // Set the output directory to 'build'
  },
});
