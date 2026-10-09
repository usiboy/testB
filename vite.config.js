import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 一次性故障注入：Actions CI 通过，隔离 Builder 必须失败并保留已发布旧版。
// 验证完成后立即以新提交移除，不用于正式应用。
if (process.env.CI !== 'true') {
  throw new Error('intentional sandbox build failure for rollback acceptance')
}

export default defineConfig({
  plugins: [react()],
  build: {
    // 此测试仓库在 Vite 7.1.2 的 Rollup tree-shaking 阶段持续卡住；只对本仓库关闭。
    rollupOptions: { treeshake: false },
  },
})
