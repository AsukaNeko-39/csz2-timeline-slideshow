# 湖湘农耕文化地图 · CSZ2 轮播副本

这是独立的公开副本，保留原项目历史；原源码和原网页不随这里的修改变化。

- [查看副本网页](https://asukaneko-39.github.io/csz2-timeline-slideshow/#cover)
- [道路人车比例、位置与另一侧新增素材](docs/releases/land-road-20261012.md)
- [土地制度图片对话与半透明界面记录](docs/releases/land-glass-20261012.md)
- [土地制度互动模块记录](docs/releases/land-journey-20261012.md)
- [本次修改记录](docs/releases/csz2-slideshow-20261012.md)
- [现行设计](design.md) · [设计理念](ideal.md)

进入“发展脉络”，鼠标放在时代卡片左侧图片上，可循环观看三张符合该阶段主题的图片。移开停止并回到首图，右上角可暂停或手动切图；手机可点击切换。

源码来源：`AsukaNeko-39/-CSZ1` 的 `68563c8e5e299d3a3f00156ba57f0c4288c69dbe`。当前仅有 origin 指向本副本仓库。

本地预览：`node scripts/start-local-preview.mjs --no-open`，地址 `http://127.0.0.1:3001/`。

构建：`pnpm exec vite build --base=/csz2-timeline-slideshow/`。将 `dist/public` 内容（加上入口副本 `404.html` 和空 `.nojekyll`）发布到本仓库 `gh-pages` 分支，GitHub Pages 使用该分支根目录。源码 `main` 的推送不会自动发布。

历史发布资料留在 docs 中；原两个仓库仅作来源参考，不是本副本发布目标。
