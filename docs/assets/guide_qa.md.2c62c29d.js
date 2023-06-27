import{_ as s,o as a,c as n,O as p}from"./chunks/framework.a9b346c9.js";const C=JSON.parse('{"title":"常见问题汇总","description":"","frontmatter":{},"headers":[],"relativePath":"guide/qa.md","filePath":"guide/qa.md"}'),l={name:"guide/qa.md"},o=p(`<h1 id="常见问题汇总" tabindex="-1">常见问题汇总 <a class="header-anchor" href="#常见问题汇总">¶</a></h1><p>下面列举了一下常见问题</p><h2 id="qa-1" tabindex="-1">为什么这个方法/功能不生效呢？ <a class="header-anchor" href="#qa-1">¶</a></h2><p>大概率是版本问题，参考<a href="https://laravel-admin.org/docs/zh/1.x/upgrading.md" target="_blank" rel="noreferrer">版本升级</a>来升级你的版本。</p><h2 id="qa-2" tabindex="-1">怎么设置语言呢？ <a class="header-anchor" href="#qa-2">¶</a></h2><p>完成安装之后，默认语言为英文(en)，如果要使用中文，打开<code>config/app.php</code>，将<code>locale</code>设置为<code>zh-CN</code>即可。</p><p>如果上面修改之后，表单的验证信息还是英文的，那么可以安装<a href="https://github.com/caouecs/Laravel-lang" target="_blank" rel="noreferrer">Laravel-lang</a>来切换成中文。</p><h2 id="qa-3" tabindex="-1">可以关掉pjax吗？ <a class="header-anchor" href="#qa-3">¶</a></h2><p>打开<code>app/Admin/bootstrap.php</code>，加入下面的代码：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Elegant</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Facades</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">disablePjax</span><span style="color:#89DDFF;">();</span></span></code></pre></div><h2 id="qa-4" tabindex="-1">关于扩展自定义组件 <a class="header-anchor" href="#qa-4">¶</a></h2><p><code>laravel-admin</code>默认引用了大量前端资源，如果有网络问题或者有不需要使用的组件，可以参考<a href="https://laravel-admin.org/docs/zh/1.x/model-form-field-management.md" target="_blank" rel="noreferrer">form组件管理</a>将其移除。</p><p>关于富文本编辑器，由于静态资源包文件普遍太大，所以<code>laravel-admin</code>默认通过cdn的方式引用<code>ckeditor</code>，建议大家根据自己的需求扩展编辑器，自行配置。</p><h2 id="qa-5" tabindex="-1">关于前端资源问题 <a class="header-anchor" href="#qa-5">¶</a></h2><p>如果需要使用自己的前端文件，可以在<code>app/Admin/bootstrap.php</code>中引入：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">css</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path/to/your/css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">js</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path/to/your/js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h2 id="qa-6" tabindex="-1">重写登录页面和登录逻辑 <a class="header-anchor" href="#qa-6">¶</a></h2><p>在路由文件<code>app/Admin/routes.php</code>中，覆盖掉登录页面和登录逻辑的路由，即可实现自定义的功能</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">group</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">prefix</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">config</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin.prefix</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">namespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">controllerNamespace</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">middleware</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">web</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Router</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">auth/login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">AuthController@getLogin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">post</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">auth/login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">AuthController@postLogin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">});</span></span></code></pre></div><p>在自定义的控制器<code>AuthController</code>中的<code>getLogin</code>、<code>postLogin</code>方法里分别实现自己的登录页面和登录逻辑。</p><p>参考控制器文件<a href="https://github.com/z-song/laravel-admin/blob/master/src/Controllers/AuthController.php" target="_blank" rel="noreferrer">AuthController.php</a>，视图文件<a href="https://github.com/z-song/laravel-admin/blob/master/views/login.blade.php" target="_blank" rel="noreferrer">login.blade.php</a></p><h2 id="qa-7" tabindex="-1">更新静态资源 <a class="header-anchor" href="#qa-7">¶</a></h2><p>如果遇到更新之后,部分组件不能正常使用,那有可能是<code>laravel-admin</code>自带的静态资源有更新了,需要运行命令<code>php artisan vendor:publish --tag=laravel-admin-assets --force</code>来重新发布前端资源，发布之后不要忘记清理浏览器缓存.</p><h2 id="qa-8" tabindex="-1">页面乱码问题 <a class="header-anchor" href="#qa-8">¶</a></h2><p>在下载或者预览文件的时候，可能会遇到页面内容全部乱码的情况，出现这个问题的原因，是因为laravel-admin默认使用pjax来加载页面，它会读取要下载或者预览的内容来渲染到当前页面的内容区域。</p><p>解决办法是打开新页面来下载或者预览文件：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">a href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://xxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_blank</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">下载文件</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>a标签上添加<code>target=&quot;_blank&quot;</code>, 用新页面打开避免使用pjax加载页面。</p><h2 id="qa-9" tabindex="-1">前后台session冲突 <a class="header-anchor" href="#qa-9">¶</a></h2><p>如果网站前台和管理后台在同一个Laravel项目中，并且在一个域名下，登录的时候可能会遇到前后台session冲突的问题，在版本v1.6.10之后修复了这个问题，先更新到<code>v1.6.10</code>以上，然后在<code>config/admin.php</code>的<code>route.middleware</code>上加上一个中间件<code>admin.session</code>即可</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">route</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">middleware</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">web</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin.session</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span></code></pre></div><p>如果后台使用子域名作为入口比如<code>admin.example.com</code>, 和<code>www.example.com</code>下的其它项目session冲突，那么可以修改<code>config/session.php</code>里面的<code>cookie</code>为其它名称（默认为<code>laravel_session</code>）。</p><h2 id="qa-10" tabindex="-1">可以去掉权限/角色/日志等功能吗？ <a class="header-anchor" href="#qa-10">¶</a></h2><p>你可能只需要用户表，不需要角色、权限、日志等功能，那么可以更新到<code>v1.7.3</code>或以上版本，然后打开<code>config/admin.php</code>, 设置下面几项：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">check_route_permission</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">check_menu_roles</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">operation_log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">enable</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">]</span></span></code></pre></div><p>然后你可以删掉除了<code>admin_users</code>之外的其它<code>admin_*</code>表了。</p><h2 id="qa-11" tabindex="-1">Laravel 7.x的日期时间类型字段的显示问题 <a class="header-anchor" href="#qa-11">¶</a></h2><p>请先阅读 <a href="https://learnku.com/docs/laravel/7.x/upgrade/7445#date-serialization" target="_blank" rel="noreferrer">https://learnku.com/docs/laravel/7.x/upgrade/7445#date-serialization</a></p><p>如果想使用默认的<code>2020-03-04 16:11:00</code>格式，也可以在你的模型里面引入<code>Elegant\\Admin\\Traits\\DefaultDatetimeFormat</code></p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Elegant</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Traits</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">DefaultDatetimeFormat</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Model</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">DefaultDatetimeFormat</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="qa-12" tabindex="-1">覆写内置视图 <a class="header-anchor" href="#qa-12">¶</a></h2><p>如果有需要自己修改view，但是不方便直接修改<code>laravel-admin</code>的情况，可以用下面的办法解决</p><p>复制<code>vendor/encore/laravel-admin/views</code>到项目的<code>resources/views/admin</code>，然后在<code>app/Admin/bootstrap.php</code>文件中加入代码：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 覆盖\`admin\`命名空间下的视图</span></span>
<span class="line"><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">view</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">prependNamespace</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">resource_path</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">views/admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span></code></pre></div><p>这样就用<code>resources/views/admin</code>下的视图覆盖了<code>laravel-admin</code>的内置视图。</p><p>在laravel-admin每个新版本发布的时候, 内置视图都有可能会变更，所以如果你覆写了laravel-admin的视图，在更新laravel-admin版本的时候, 很有可能会出现视图方面的问题，这个需要你对照修改过的视图文件和内置视图自行修改解决。</p>`,46),e=[o];function c(t,r,D,F,y,d){return a(),n("div",null,e)}const h=s(l,[["render",c]]);export{C as __pageData,h as default};
