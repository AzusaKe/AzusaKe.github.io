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

默认入口是 `https://azusake.github.io/`。`profile.azusake.network` 可以继续作为自定义入口；发布前需要在域名侧完成 DNS 和 HTTPS 证书配置，站点不会绕过浏览器的证书安全提示。
