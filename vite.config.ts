import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve:{ // 设置resole
    alias:{
      "@": path.resolve(__dirname, './src')
    }
  }
});