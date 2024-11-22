import{_ as s,c as e,a2 as n,o as p}from"./chunks/framework.RXnjjeXB.js";const u=JSON.parse('{"title":"OpenHarmony SDK编译手册","description":"","frontmatter":{},"headers":[],"relativePath":"docs/openharmony.md","filePath":"docs/openharmony.md","lastUpdated":1732029778000}'),i={name:"docs/openharmony.md"};function o(t,a,l,c,d,h){return p(),e("div",null,a[0]||(a[0]=[n(`<h1 id="openharmony-sdk编译手册" tabindex="-1">OpenHarmony SDK编译手册 <a class="header-anchor" href="#openharmony-sdk编译手册" aria-label="Permalink to &quot;OpenHarmony SDK编译手册&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>openharmony 设备开发文档</span></span>
<span class="line"><span>https://docs.openharmony.cn/pages/v4.1/zh-cn/device-dev/device-dev-guide.md</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#OpenHarmony 版本概述 </span></span>
<span class="line"><span>https://gitee.com/openharmony/docs/blob/master/zh-cn/release-notes/OpenHarmony-v5.0.0-release.md</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#github 文档集合</span></span>
<span class="line"><span>https://github.com/fenwii/OpenHarmony/tree/master</span></span></code></pre></div><h2 id="源码获取" tabindex="-1">源码获取 <a class="header-anchor" href="#源码获取" aria-label="Permalink to &quot;源码获取&quot;">​</a></h2><h3 id="通过rope获取" tabindex="-1">通过rope获取 <a class="header-anchor" href="#通过rope获取" aria-label="Permalink to &quot;通过rope获取&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p OpenHarmony-v4.0-Release &amp;&amp; cd OpenHarmony-v4.0-Release</span></span>
<span class="line"><span>repo init -u https://gitee.com/openharmony/manifest -b refs/tags/OpenHarmony-v4.0-Release --no-repo-verify</span></span>
<span class="line"><span>repo sync -c</span></span>
<span class="line"><span>repo forall -c &#39;git lfs pull&#39;</span></span></code></pre></div><h3 id="通过华为镜像站获取" tabindex="-1">通过华为镜像站获取 <a class="header-anchor" href="#通过华为镜像站获取" aria-label="Permalink to &quot;通过华为镜像站获取&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://mirrors.huaweicloud.com/harmonyos/os/5.0.0-Release/</span></span></code></pre></div><h2 id="环境搭建" tabindex="-1">环境搭建 <a class="header-anchor" href="#环境搭建" aria-label="Permalink to &quot;环境搭建&quot;">​</a></h2><p>系统：ubuntu</p><h3 id="安装docker" tabindex="-1">安装docker <a class="header-anchor" href="#安装docker" aria-label="Permalink to &quot;安装docker&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt install docker.io</span></span></code></pre></div><h3 id="镜像下载" tabindex="-1">镜像下载 <a class="header-anchor" href="#镜像下载" aria-label="Permalink to &quot;镜像下载&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo docker pull swr.cn-south-1.myhuaweicloud.com/openharmony-docker/openharmony-docker:1.0.0</span></span></code></pre></div><h2 id="sdk编译" tabindex="-1">SDK编译 <a class="header-anchor" href="#sdk编译" aria-label="Permalink to &quot;SDK编译&quot;">​</a></h2><h3 id="创建容器" tabindex="-1">创建容器 <a class="header-anchor" href="#创建容器" aria-label="Permalink to &quot;创建容器&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo docker run -it -v /work/OpenHamrony-v4.0-Release:/home/openharmony swr.cn-south-1.myhuaweicloud.com/openharmony-docker/openharmony-docker:1.0.0</span></span></code></pre></div><p>其中</p><ul><li>命令中<code>/work/OpenHamrony-v4.0-Release</code>表示OH源代码在PC Linux中的实际路径</li><li>命令中<code>/home/openharmony</code>表示OpenHarmony源代码在容器中的虚拟目录</li></ul><h3 id="安装编译工具" tabindex="-1">安装编译工具 <a class="header-anchor" href="#安装编译工具" aria-label="Permalink to &quot;安装编译工具&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 移动到容器内OpenHarmony主目录</span></span>
<span class="line"><span>cd /home/openharmony</span></span>
<span class="line"><span># 下载编译工具</span></span>
<span class="line"><span>./build/prebuilts_download.sh</span></span></code></pre></div><p>安装hb编译工具，在命令行终端中，执行如下命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 跳转到容器内OpenHarmony源代码主目录</span></span>
<span class="line"><span>cd /home/openharmony</span></span>
<span class="line"><span># 安装hb等工具</span></span>
<span class="line"><span>pip3 install build/hb</span></span>
<span class="line"><span># 如果上述pip3 install build/hb无效，则运行如下命令（同样是安装hb工具）</span></span>
<span class="line"><span>python3 -m pip install --user build/lite</span></span></code></pre></div><h3 id="选择编译分支" tabindex="-1">选择编译分支 <a class="header-anchor" href="#选择编译分支" aria-label="Permalink to &quot;选择编译分支&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 移动到容器内OpenHarmony主目录</span></span>
<span class="line"><span>cd /home/openharmony</span></span>
<span class="line"><span># 设置OpenHarmony主目录</span></span>
<span class="line"><span>hb set -root .</span></span></code></pre></div><h3 id="开始编译" tabindex="-1">开始编译 <a class="header-anchor" href="#开始编译" aria-label="Permalink to &quot;开始编译&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>在docker命令行终端中，强制编译OpenHamrony源码，执行如下命令</span></span>
<span class="line"><span>hb build -f</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>或者可以选择性编译（即已编译过，不再编译），执行如下命令：</span></span>
<span class="line"><span>hb build</span></span></code></pre></div><h3 id="docker常用命令" tabindex="-1">docker常用命令 <a class="header-anchor" href="#docker常用命令" aria-label="Permalink to &quot;docker常用命令&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 列出所有的容器</span></span>
<span class="line"><span>docker container ls --all</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 根据列出的容器，选择对应的containerID</span></span>
<span class="line"><span>docker container start [containerID]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 接入到容器中</span></span>
<span class="line"><span>docker container attach [containerID]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 删除容器</span></span>
<span class="line"><span>docker rm [containerID]</span></span></code></pre></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="code-4000" tabindex="-1">Code: 4000 <a class="header-anchor" href="#code-4000" aria-label="Permalink to &quot;Code: 4000&quot;">​</a></h3><p>可能原因：因为Linux-5.10内核中开启了 CONFIG_DEBUG_INFO_BTF=y 调试项，这个项会在编译过程调用pahole工具去分析整个内核，这个过程需要大量内存，内存耗内导致编译失败。</p><p>解决方法：在目录<code>//kernel/linux/config/linux-5.10/rk3568/arch/arm64_defconfig</code>下找到arm64_defconfig文件，找到CONFIG_DEBUG_INFO_BTF=y这一行，前面加上#注释掉即可</p>`,38)]))}const b=s(i,[["render",o]]);export{u as __pageData,b as default};
