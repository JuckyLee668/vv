# VV 个人网站项目

这是一个个人网站项目，包含多个实用工具和页面。

## 🚀 新增功能

### V2Ray 配置转换器
- **文件位置**: `html/vtoBase64.html`
- **功能**: 将 VLESS/Trojan 等协议转换为 Base64 编码
- **特性**: 
  - 支持多协议批量转换
  - GitHub Actions 自动部署
  - 直接 API 更新文件
  - 实时状态监控

### GitHub Actions 集成
- **工作流文件**: `.github/workflows/update-v2.yml`
- **功能**: 自动更新根目录下的 v2 文件
- **触发方式**: 
  - 手动触发 (workflow_dispatch)
  - API 调用 (repository_dispatch)

## 📁 项目结构

```
├── html/
│   ├── vtoBase64.html          # V2Ray 配置转换器
│   ├── xray.html               # X-ray 订阅页面
│   └── jqueryexample.html      # jQuery 示例页面
├── tool/
│   ├── onlineClipboard.html    # 跨设备剪切板
│   ├── cformula.html           # 公式计算器
│   └── tools.html              # 工具导航页面
├── api/
│   ├── github-client.js        # GitHub API 客户端
│   └── github-proxy.html       # API 代理说明页面
├── .github/workflows/
│   └── update-v2.yml           # V2Ray 配置更新工作流
├── docs/
│   └── v2ray-converter-guide.md # 使用说明文档
├── v2                          # V2Ray 配置文件 (Base64 编码)
└── index.html                  # 主页
```

## 🛠️ 工具列表

1. **跨设备剪切板** - 在不同设备间同步剪切板内容
2. **通用公式计算器** - 支持复杂数学公式计算
3. **V2Ray 配置转换器** - 协议转换和自动部署 (新增)

## 🔧 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **样式**: 原生 CSS + Font Awesome 图标
- **API**: GitHub REST API v3
- **CI/CD**: GitHub Actions
- **部署**: GitHub Pages

## 📖 使用说明

### V2Ray 配置转换器使用方法

1. **访问工具**: 打开 `html/vtoBase64.html`
2. **输入配置**: 粘贴 VLESS/Trojan 等协议链接
3. **转换编码**: 点击转换按钮生成 Base64 编码
4. **自动部署**: 
   - 方式一: 使用 GitHub Actions (推荐)
   - 方式二: 直接 API 调用

### GitHub Actions 配置

1. 确保仓库中存在 `.github/workflows/update-v2.yml` 文件
2. 在仓库设置中启用 Actions 并给予写入权限
3. 在转换器中配置仓库地址和 Token (可选)

## 🔐 安全说明

- 转换操作在浏览器本地完成
- GitHub Token 仅用于 API 调用，不会被存储
- 建议将包含敏感配置的仓库设为私有

## 📝 更新日志

### 2024-07-11
- ✨ 新增 V2Ray 配置转换器
- 🚀 集成 GitHub Actions 自动部署
- 📚 添加详细使用文档
- 🔧 优化工具导航页面

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests 来改进这个项目。

## 📄 许可证

本项目仅供学习和技术研究使用。

---

# 欢迎来到 JuckyLee668 的 GitHub 主页

你好！我是 JuckyLee668，一名热爱编程和技术的开发者。欢迎访问[我的主页](https://xi-han.top)。

## 关于我

- **姓名**：淅寒
- **兴趣爱好**：编程、开源项目、技术分享

## 我的项目

### [vitepress-with-github-Actions](https://github.com/JuckyLee668/vitepress-with-github-Actions)

这是一个使用 VitePress 构建文档的项目。通过 GitHub Actions 自动化构建和部署，确保文档始终保持最新。



## 联系我

- **GitHub**：[JuckyLee668](https://github.com/JuckyLee668)
- **邮箱**：a@xi-han.top

感谢你的访问！如果你对我的项目感兴趣，欢迎 Star 和 Fork，也可以通过邮件与我联系。
