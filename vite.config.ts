import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  // 配置css 加载器，需要下载 less@4.1.3 less-loader@11.1.0
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        module: true,
      }
    }
  },
  resolve:{ // 设置resole
    alias:{
      "@": path.resolve(__dirname, './src'),
      "pages/*": path.resolve(__dirname, 'src/pages'),
      "@icons": path.resolve(__dirname, 'src/assets/icons'),
      "components/*": path.resolve(__dirname, 'src/components'),
      "*": path.resolve('')
    }
  },
  server: {
    port: 8989, // 端口
    host: '127.0.0.1',
    open: true,
    proxy: { // 服务代理
      '/api': {
        target: 'https://localhost:8990',
        changeOrigin: true,
        // rewrite: (path: any) => path.replace(/^/api/, ''), 
      },
    },
  },
  build: { // 打包设置
    manifest: true,
    rollupOptions: {
      output: {
        sourcemap: false,
      },
    },
  },
});