import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@Model', replacement: path.resolve(__dirname, 'src/Model') },
      { find: '@Components', replacement: path.resolve(__dirname, 'src/Components') },
      { find: '@Utils', replacement: path.resolve(__dirname, 'src/Utils') },
    ],
  },
  plugins: [react()],
});
