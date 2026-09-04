# Azusa_Ke 个人主页

这是 Azusa_Ke 的个人主页，使用 Vite、React、TypeScript 和 `liquid-glass-react` 构建。

## 页面

- `/`：个人介绍、项目入口、博客精选和联系方式
- `/projects/`：作品集
- `/lab/`：实验页面入口
- `/lab/glass/`：LiquidGlass 参数调试页
- `/galaxy/`、`/hacker.html`：保留的旧实验路径

首页只加载主页所需的 React 代码；Galaxy 的旧脚本会在构建时复制到对应实验路径，不会进入首页首屏。

## 本地开发

```bash
npm install
npm run dev
```

正式构建：

```bash
npm run build
npm run preview
```

个人信息、项目、博客精选和联系方式集中维护在 `src/content/site.ts`。其中 `NoMoreBinding` 只保留“即将公开”状态，不在站点保存未确认的技术细节或私密链接。

第三方依赖和字体许可说明见 THIRD-PARTY-NOTICES.md。MiSans 当前未内嵌，避免在 webfont 许可未确认前公开分发字体文件。
## GitHub Pages

`.github/workflows/deploy.yml` 会在 `main` 分支更新后构建并发布 `dist`。`test-site`、测试图片和 `server_texture.zip` 保留在源码仓库中，但不会被复制到正式构建产物。

默认入口是 `https://azusake.github.io/`。如需启用 `profile.azusake.network`，请在仓库的 `Settings → Pages → Custom domain` 中设置该域名，并在 DNS 中保留指向 `azusake.github.io` 的 CNAME 记录。当前使用自定义 GitHub Actions 工作流发布，域名绑定以 Pages 设置为准；HTTPS 证书由 GitHub Pages 自动签发，期间可能需要等待一段时间，站点不会绕过浏览器的证书安全提示。
