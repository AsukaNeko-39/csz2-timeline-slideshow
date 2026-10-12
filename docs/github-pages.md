## 2026-10-12：独立轮播副本（当前维护目标）

本目录为 `csz2-timeline-slideshow`，源自原项目提交 `68563c8e5e299d3a3f00156ba57f0c4288c69dbe`，保留历史。只在副本修改和发布，原 `-CSZ1` 源码、`-CSZ1-pages` 网站及原本地目录均不修改。

- 当前源码： https://github.com/AsukaNeko-39/csz2-timeline-slideshow （公开）。
- 本地目录： `C:/Users/20401/Desktop/农耕文明/csz2-timeline-slideshow`；预览端口 `3001`。
- 副本网页： https://asukaneko-39.github.io/csz2-timeline-slideshow/#cover 。
- 发布到本仓库 `gh-pages` 分支根目录，构建资源前缀为 `/csz2-timeline-slideshow/`；不得照搬下方历史记录向原仓库发布。
- 发展脉络五张卡片各使用三张对应时代图片：鼠标移入左侧图片区每 2.8 秒循环淡入，移开复位；手动下一张和播放/暂停支持触屏及键盘。非当前卡片、离开视口及隐藏标签页暂停；减少动态效果设置下不因悬停自动播放。
- 文献、器物完整展示，原图模糊延展填充空余区域；保留正文分页、标题和原跳转。图片来源为项目已有资料，未生成历史图像。
- 新实现： `client/src/components/EraSlideshow.tsx`、`era-slideshow.css`、`client/src/data/timelineSlides.ts`。

以下为历史记录；其中旧路径、隐私状态和发布目标不代表当前副本。

# GitHub 网页发布

网站版本：**CSZ2版**，Git 标签 `csz2`。

## 2026-09-21 CSZ2版本

本轮修改见 [CSZ2修改记录](releases/csz2.md)，带截图补记为 [6页PDF](releases/csz2-notes.pdf)。公开完整记录在保留原30页的基础上加入本轮6页，共36页。仓库名与公开网址继续沿用。

下列2026-09-09记录为历史归档，其中CSZ1版本及旧页数不代表当前发布。

欢迎页入口：https://asukaneko-39.github.io/-CSZ1-pages/#cover

公开网页仓库：https://github.com/AsukaNeko-39/-CSZ1-pages

私有源码仓库：https://github.com/AsukaNeko-39/-CSZ1

公开修改记录（PDF，30 页）：https://asukaneko-39.github.io/-CSZ1-pages/docs/modification-record.pdf

修改记录于 2026-09-09 按用户要求上传，文件与本地记录内容一致。

2026-09-09 首页图栏更新：土地制度与重要文物图片贴齐外框，增加图片面积，逐张调整取景位置；方鼎主体加大，素纱单衣适度裁去两侧，竖版皿方罍用原图背景延展。图文卡保持等大对齐，详情页保留完整原图；修改记录追加前后对比图，共 29 页。

源码仓库继续保持私有。当前账号无法从私有仓库发布 GitHub Pages，因此使用独立公开仓库存放编译后的网页文件和图片素材。页面本身不要求登录，可直接转发访问。搜索引擎禁索引设置不等于访问权限控制。

2026-09-09 入口修复：外部新打开的链接即使带有栏目后缀，也先显示欢迎页；分享按钮复制欢迎页网址，复制权限受限时显示手动复制窗口。站内刷新和前进后退保留当前栏目。修改记录现为 30 页。

## 首次公开发布记录

- 日期：2026-09-09。
- 网页来源提交：`c9fc8d425eba60106880c03d2413aa388874618b`。
- 公开发布提交：`d73c4208f29682c1ba58a85cd7cf55f72d7659a7`。
- GitHub Pages 使用公开发布仓库的 `main` 分支根目录，并启用 HTTPS。
- 原上游仓库没有改动，本地仍禁用向原上游推送。

## 后续更新

发布需显式构建、检查并更新公开仓库；推送源码仓库不会自动更新网页。当前源码仓库中的旧 Pages 工作流只保留手动触发，本次发布不使用该工作流。

构建时必须使用 `/-CSZ1-pages/` 作为资源根路径。可使用项目已安装的工具：

```powershell
node node_modules/typescript/bin/tsc --noEmit
node node_modules/vite/bin/vite.js build --base '/-CSZ1-pages/' --outDir '<独立发布目录>'
```

公开仓库上传构建输出、网页素材及用户要求公开的修改记录 PDF；不上传源码开发历史、本地需求文档、凭据、依赖目录或 `.openai` 绑定。更新网页时保留 `docs/modification-record.pdf`、`.nojekyll`、`404.html` 和禁索引设置。更新前核对欢迎页、五个专题、图片路径与手机布局，更新后再次核对公开网址。


## 2026-09-22 欢迎页图片更新

以用户新截图高清修复水墨农耕背景，替换米白稻田欢迎页；版本仍为CSZ2。说明与当前截图见 [本次补记](releases/csz2-cover-20260922.md)。原36页PDF保持历史原样；本次只新增图文补记。公开入口缓存参数为 `v=csz2-landscape-20260922`；原网址继续有效。
