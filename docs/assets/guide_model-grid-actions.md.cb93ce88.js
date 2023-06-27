import{_ as s,o as n,c as a,O as l}from"./chunks/framework.a9b346c9.js";const C=JSON.parse('{"title":"数据操作","description":"","frontmatter":{},"headers":[],"relativePath":"guide/model-grid-actions.md","filePath":"guide/model-grid-actions.md"}'),p={name:"guide/model-grid-actions.md"},o=l(`<h1 id="数据操作" tabindex="-1">数据操作 <a class="header-anchor" href="#数据操作">¶</a></h1><p>数据表格默认有3个行操作<code>编辑</code>、<code>查看</code>和<code>删除</code>，可以通过下面的方式关闭它们：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">actions</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">actions</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 去掉删除</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">actions</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">disableDelete</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 去掉编辑</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">actions</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">disableEdit</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 去掉查看</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">actions</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">disableView</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 全部关闭</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">disableActions</span><span style="color:#89DDFF;">();</span></span></code></pre></div><p>可以通过传入的<code>$actions</code>参数来获取当前行的数据：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">actions</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">actions</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 当前行的数据数组</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">actions</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 获取当前行主键值</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">actions</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getKey</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span></code></pre></div><p>默认情况下有一个批量删除的操作，有下面的一些使用方法</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">batchActions</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">batch</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">batch</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">disableDelete</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 去掉批量操作</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">disableBatchActions</span><span style="color:#89DDFF;">();</span></span></code></pre></div><h2 id="自定义操作" tabindex="-1">自定义操作 <a class="header-anchor" href="#自定义操作">¶</a></h2><blockquote><p>从v1.7.3版本开始，以下文档废弃，请不要再使用。请使用<a href="https://laravel-admin.org/docs/zh/1.x/model-grid-custom-actions" target="_blank" rel="noreferrer">文档</a>.</p></blockquote><p>如果有自定义的操作按钮，可以通过下面的方式添加：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">actions</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">actions</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// append一个操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">actions</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;a href=&quot;&quot;&gt;&lt;i class=&quot;fa fa-eye&quot;&gt;&lt;/i&gt;&lt;/a&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// prepend一个操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">actions</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">prepend</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;a href=&quot;&quot;&gt;&lt;i class=&quot;fa fa-paper-plane&quot;&gt;&lt;/i&gt;&lt;/a&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span></code></pre></div><p>如果有比较复杂的操作，可以参考下面的方式：</p><p>先定义操作类</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Extensions</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Encore</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CheckRow</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__construct</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#A6ACCD;">id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">script</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;&lt;SCRIPT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">$(&#39;.grid-check-row&#39;).on(&#39;click&#39;, function () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">    // Your code.</span></span>
<span class="line"><span style="color:#C3E88D;">    console.log($(this).data(&#39;id&#39;));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">SCRIPT</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">script</span><span style="color:#89DDFF;">($this-&gt;</span><span style="color:#82AAFF;">script</span><span style="color:#89DDFF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;a class=&#39;btn btn-xs btn-success fa fa-check grid-check-row&#39; data-id=&#39;</span><span style="color:#89DDFF;">{$this-&gt;</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&#39;&gt;&lt;/a&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__toString</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>然后添加操作：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">actions</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">actions</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 添加操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">actions</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CheckRow</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">actions</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getKey</span><span style="color:#89DDFF;">()));</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span></code></pre></div>`,16),e=[o];function t(c,r,D,F,y,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
