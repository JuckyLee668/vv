// GitHub API 客户端脚本
// 用于 V2Ray 配置转换器的 GitHub Actions 集成

class GitHubAPIClient {
    constructor(token, repo) {
        this.token = token;
        this.repo = repo;
        this.baseURL = 'https://api.github.com';
        this.headers = {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
        };
    }

    // 触发 workflow
    async triggerWorkflow(workflowId, inputs) {
        const url = `${this.baseURL}/repos/${this.repo}/actions/workflows/${workflowId}/dispatches`;
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    ref: 'main',
                    inputs: inputs
                })
            });

            if (response.status === 204) {
                return { success: true, message: 'Workflow triggered successfully' };
            } else {
                const error = await response.json();
                return { success: false, error: error.message || 'Unknown error' };
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // 获取 workflow 运行状态
    async getWorkflowRuns(workflowId, limit = 5) {
        const url = `${this.baseURL}/repos/${this.repo}/actions/workflows/${workflowId}/runs?per_page=${limit}`;
        
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: this.headers
            });

            if (response.ok) {
                const data = await response.json();
                return { success: true, runs: data.workflow_runs };
            } else {
                const error = await response.json();
                return { success: false, error: error.message || 'Failed to fetch runs' };
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // 获取仓库内容
    async getFileContent(filePath) {
        const url = `${this.baseURL}/repos/${this.repo}/contents/${filePath}`;
        
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: this.headers
            });

            if (response.ok) {
                const data = await response.json();
                const content = atob(data.content.replace(/\s/g, ''));
                return { success: true, content: content, sha: data.sha };
            } else {
                const error = await response.json();
                return { success: false, error: error.message || 'File not found' };
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // 更新文件内容
    async updateFile(filePath, content, commitMessage, sha) {
        const url = `${this.baseURL}/repos/${this.repo}/contents/${filePath}`;
        
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: this.headers,
                body: JSON.stringify({
                    message: commitMessage,
                    content: btoa(unescape(encodeURIComponent(content))),
                    sha: sha
                })
            });

            if (response.ok) {
                const data = await response.json();
                return { 
                    success: true, 
                    commit: data.commit,
                    url: data.content.html_url 
                };
            } else {
                const error = await response.json();
                return { success: false, error: error.message || 'Failed to update file' };
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // 检查仓库权限
    async checkPermissions() {
        const url = `${this.baseURL}/repos/${this.repo}`;
        
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: this.headers
            });

            if (response.ok) {
                const data = await response.json();
                return { 
                    success: true, 
                    permissions: data.permissions,
                    private: data.private
                };
            } else {
                return { success: false, error: 'Repository not found or no access' };
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

// 导出供页面使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GitHubAPIClient;
} else if (typeof window !== 'undefined') {
    window.GitHubAPIClient = GitHubAPIClient;
}

// 辅助函数：验证 GitHub token 格式
function isValidGitHubToken(token) {
    // GitHub Personal Access Token 格式检查
    const patterns = [
        /^ghp_[a-zA-Z0-9]{36}$/, // Classic PAT
        /^github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59}$/, // Fine-grained PAT
        /^gho_[a-zA-Z0-9]{36}$/, // OAuth token
    ];
    
    return patterns.some(pattern => pattern.test(token));
}

// 辅助函数：验证仓库名格式
function isValidRepoName(repo) {
    return /^[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+$/.test(repo);
}

// 辅助函数：格式化错误信息
function formatGitHubError(error) {
    const errorMessages = {
        'Bad credentials': '❌ GitHub Token 无效或已过期',
        'Not Found': '❌ 仓库不存在或无访问权限',
        'Forbidden': '❌ 权限不足，请检查 Token 权限',
        'Unprocessable Entity': '❌ 请求参数错误',
        'API rate limit exceeded': '❌ API 调用频率超限，请稍后重试'
    };
    
    return errorMessages[error] || `❌ 错误: ${error}`;
}

// 示例使用方法
/*
const client = new GitHubAPIClient('your-token', 'username/repository');

// 触发工作流
const result = await client.triggerWorkflow('update-v2.yml', {
    config_data: 'base64-encoded-config',
    commit_message: 'Update v2 config'
});

if (result.success) {
    console.log('✅ Workflow triggered successfully');
} else {
    console.error('❌ Error:', result.error);
}
*/
