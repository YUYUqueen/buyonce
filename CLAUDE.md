# BuyOnce — 买断制软件目录

## 一句话

帮用户找到不用订阅、一次买断的优质软件。

## 目标用户

- 对订阅疲劳的软件用户（"I just want to buy it once"）
- 预算敏感的独立开发者、设计师、小企业主
- r/buyitforlife 社区心态的人群

## 核心功能（MVP）

1. **可搜索的买断制软件目录**：按分类浏览，每个软件有名称、简介、价格、链接、标签
2. **分类体系**：开发工具、设计工具、生产力、笔记/写作、安全/隐私、系统工具 等
3. **用户提交**：任何人可以提交新的买断制软件
4. **affiliate 链接**：软件链接嵌入 affiliate tracking（启动期唯一变现方式）

### 不做（MVP 阶段）

- 用户注册/登录
- 评分/评论系统
- 付费收录后台
- AI 推荐

## 技术栈

- **Astro** — 静态站生成（复用 vibelayer 经验，SSG 对 SEO 最优）
- **Tailwind CSS** — 样式
- **Supabase** — 软件数据存储 + 用户提交表单
- **Vercel** — 部署
- 数据初始用 JSON/MDX 文件，后期迁移到 Supabase

## 项目结构

```
buyonce/
├── src/
│   ├── pages/
│   │   ├── index.astro          # 首页：搜索 + 热门分类
│   │   ├── category/[slug].astro # 分类页
│   │   ├── software/[slug].astro # 软件详情页
│   │   └── submit.astro          # 提交软件
│   ├── components/
│   │   ├── SearchBar.astro
│   │   ├── SoftwareCard.astro
│   │   ├── CategoryNav.astro
│   │   └── SubmitForm.astro
│   ├── layouts/
│   │   └── Base.astro
│   ├── content/
│   │   └── software/            # MDX 文件，每个软件一个
│   └── styles/
│       └── global.css
├── public/
│   └── og-image.png
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
└── CLAUDE.md
```

## 数据模型

每个软件条目：

```typescript
interface Software {
  slug: string           // URL 友好的标识
  name: string           // 软件名称
  description: string    // 一句话简介
  price: string          // "$49" / "$99 - $199" / "Free + Paid"
  url: string            // 官网链接（含 affiliate 参数）
  category: string       // 主分类
  tags: string[]         // 标签（如 "mac", "windows", "linux", "open-source"）
  platform: string[]     // 支持平台
  highlight: string      // 一句话亮点（为什么选它）
  addedAt: string        // 收录日期
}
```

## 收费模式

1. **启动期（现在）**：affiliate 链接，零成本验证
2. **验证后**：软件厂商付费置顶 / 推荐位
3. **增长期**：用户订阅（新软件提醒、高级筛选）

## SEO 策略

- 每个软件页面 = 一个长尾关键词着陆页（"best one-time purchase [category] software"）
- 分类页 = 中等竞争度关键词（"buy once design tools"）
- 首页 = 核心关键词（"buy once software", "no subscription software"）
- 每收录一个软件，可同步写一篇 vibelayer 博客评测

## 冷启动

1. Reddit: r/buyitforlife, r/software, r/SaaS, r/degoogle, r/macapps
2. HN: Show HN 发布
3. Twitter: 反订阅话题天然传播
4. Product Hunt

## 验证标准（2 周）

- [ ] >100 独立访客
- [ ] >5 个用户提交软件
- [ ] affiliate 链接有点击
- 未达标 → 分析 → 调整或切到备选需求 #2
