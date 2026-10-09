import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // 此测试仓库在 Vite 7.1.2 的 Rollup tree-shaking 阶段持续卡住；只对本仓库关闭。
    rollupOptions: { treeshake: false },
  },
})
