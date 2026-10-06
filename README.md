# 租户 B · React 测试应用

供绫通弹性计算平台验证另一租户的 GitHub 固定提交、独立构建与前端预览。页面只在浏览器内做整数计算，不连接真实业务数据，不包含凭据。

本地运行（Node.js 22+）：`npm ci --ignore-scripts && npm run build`。本仓库和租户 A 的仓库须分别校验来源与制品摘要。

此测试仓库的 Vite 7.1.2 默认构建在 Rollup `transforming` 阶段无法完成；`vite.config.js` 只针对本仓库关闭 tree-shaking，以便真实固定源码可重复构建。输出 JS 因此变大；该配置不应作为其他 React 项目的平台默认策略。GitHub Actions 会对推送与 PR 运行锁文件安装、构建并保存 7 天静态产物。
