# V2Ray 配置转换器使用说明

这是一个专业的 V2Ray 配置管理工具，可以将多个协议配置转换为 Base64 编码，并通过 GitHub Actions 自动更新仓库中的配置文件。

## 🚀 主要功能

### 1. 协议转换
- **支持协议**: VLESS, Trojan, VMess, Shadowsocks
- **输入格式**: 标准协议 URL 格式
- **输出格式**: Base64 编码
- **批量处理**: 支持一次转换多个配置

### 2. GitHub 集成
- **自动部署**: 通过 GitHub Actions 自动更新配置
- **直接更新**: 使用 GitHub API 直接更新文件
- **状态监控**: 实时查看运行状态和结果

### 3. 安全特性
- **本地处理**: 配置转换在浏览器本地完成
- **Token 保护**: 支持 GitHub Personal Access Token
- **权限验证**: 自动检查仓库访问权限

## 📋 使用步骤

### 步骤 1: 准备配置
1. 在输入框中粘贴您的 V2Ray 配置链接
2. 每行一个配置，支持以下格式：
   ```
   vless://uuid@server:port?encryption=none&security=tls&type=ws&host=example.com&path=/path#name
   trojan://password@server:port?security=tls&type=grpc&serviceName=service#name
   vmess://base64-encoded-config
   ss://method:password@server:port#name
   ```

### 步骤 2: 转换配置
1. 点击 "转换为 Base64" 按钮
2. 查看转换结果和统计信息
3. 可以点击 "复制结果" 按钮复制 Base64 编码

### 步骤 3: GitHub 配置
1. **仓库地址**: 输入格式为 `username/repository`
2. **GitHub Token**: 创建 Personal Access Token（可选）
3. **目标文件**: 通常为 `v2`
4. **提交信息**: 自定义提交消息

### 步骤 4: 部署选择

#### 选项 A: GitHub Actions（推荐）
1. 点击 "触发 GitHub Action" 按钮
2. 如果没有配置 Token，会引导您到 GitHub 网页界面
3. 在 Actions 页面手动运行工作流

#### 选项 B: 直接更新
1. 配置 GitHub Token
2. 点击 "直接更新文件" 按钮
3. 系统会直接调用 GitHub API 更新文件

## 🔧 GitHub Actions 设置

### 1. 创建工作流文件
将以下内容保存为 `.github/workflows/update-v2.yml`:

```yaml
name: Update V2Ray Config

on:
  workflow_dispatch:
    inputs:
      config_data:
        description: 'Base64 encoded config data'
        required: true
        type: string
      commit_message:
        description: 'Commit message'
        required: false
        default: '🔄 Auto update v2 config'
        type: string

jobs:
  update-config:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      
    steps:
    - name: Checkout repository
      uses: actions/checkout@v4
      
    - name: Update v2 file
      run: echo "${{ github.event.inputs.config_data }}" > v2
      
    - name: Commit and push changes
      run: |
        git config --local user.email "action@github.com"
        git config --local user.name "GitHub Action"
        git add v2
        git commit -m "${{ github.event.inputs.commit_message }}" || exit 0
        git push
```

### 2. 配置仓库权限
1. 前往仓库 Settings > Actions > General
2. 在 "Workflow permissions" 部分选择 "Read and write permissions"
3. 勾选 "Allow GitHub Actions to create and approve pull requests"

### 3. 创建 Personal Access Token（可选）
1. 前往 GitHub Settings > Developer settings > Personal access tokens
2. 点击 "Generate new token (classic)"
3. 设置权限：`repo` (完整仓库访问权限)
4. 复制生成的 token 到工具配置中

## 🛡️ 安全注意事项

### 1. Token 安全
- 不要在公共环境中输入 GitHub Token
- 使用完毕后可以撤销 Token
- 建议使用 Fine-grained tokens 并限制权限范围

### 2. 配置安全
- 避免在公共网络环境下使用敏感配置
- 定期更换配置信息
- 监控仓库访问日志

### 3. 仓库安全
- 将包含敏感配置的仓库设为私有
- 定期检查仓库访问权限
- 使用分支保护规则

## 🔍 故障排除

### 常见问题

**Q: GitHub Action 触发失败？**
A: 检查以下几点：
- 仓库地址格式是否正确 (`username/repository`)
- GitHub Token 是否有效且具有足够权限
- 工作流文件是否正确放置在 `.github/workflows/` 目录

**Q: 直接更新文件失败？**
A: 可能的原因：
- GitHub Token 权限不足
- 目标文件被保护或不存在
- 网络连接问题

**Q: 转换结果不正确？**
A: 请检查：
- 输入的配置格式是否正确
- 是否包含特殊字符需要转义
- 配置链接是否完整

### 调试技巧
1. 打开浏览器开发者工具查看控制台输出
2. 检查 GitHub Actions 运行日志
3. 验证 Base64 编码结果的正确性

## 📚 扩展功能

### 1. 批量管理
- 支持导入/导出配置文件
- 配置模板功能
- 历史记录管理

### 2. 自动化集成
- 定时更新配置
- Webhook 触发
- 多仓库同步

### 3. 监控功能
- 配置可用性检测
- 性能监控
- 告警通知

## 🤝 技术支持

如果您在使用过程中遇到问题，可以：

1. 查看项目文档和说明
2. 检查 GitHub Issues
3. 提交问题反馈

---

**注意**: 此工具仅供学习和技术研究使用，请遵守相关法律法规和服务条款。
