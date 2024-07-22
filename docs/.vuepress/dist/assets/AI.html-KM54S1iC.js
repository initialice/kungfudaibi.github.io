import{_ as n,c as a,o as s,a as t}from"./app-oxgKdbjm.js";const e={},p=t(`<h1 id="artificial-intelligence" tabindex="-1"><a class="header-anchor" href="#artificial-intelligence"><span>Artificial Intelligence</span></a></h1><blockquote><p>使机械具有人一样的智能</p></blockquote><p>最简单的人工智能其实就是条件控制</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">elif</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">elif</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如说游戏里有个怪物碰到你就追你，碰到障碍就使坐标偏移之类的，但是这样的代码解决不了一些复杂的问题，比如说图片的分类、复杂的对话等等，机械学习包括后面的深度学习就是为了解决这些问题的。</p><h2 id="相关资源" tabindex="-1"><a class="header-anchor" href="#相关资源"><span>相关资源</span></a></h2><ul><li><a href="https://zh.d2l.ai/" target="_blank" rel="noopener noreferrer">动手学深度学习</a></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这是一本可以运行的书，需要你在本地搭建好环境，自行搜索并下载anaconda或者miniconda,创建虚拟环境，如果你的jupyter更换内核有问题，可以参考<a href="https://medium.com/@sairampillai/how-to-add-your-conda-environment-to-your-jupyter-notebook-in-just-3-steps-6b0d44bf7ade" target="_blank" rel="noopener noreferrer">有魔法访问</a>,<a href="https://stackoverflow.com/questions/39604271/conda-environments-not-showing-up-in-jupyter-notebook" target="_blank" rel="noopener noreferrer">无魔法</a></p></div><ul><li><a href="https://lena-voita.github.io/nlp_course.html" target="_blank" rel="noopener noreferrer">NLP for you</a></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>需要魔法访问</p></div><ul><li><a href="https://www.bilibili.com/video/BV1FT4y1E74V/?vd_source=7aa5d5e2ccdd8646589b9266487f6683" target="_blank" rel="noopener noreferrer">吴恩达B站</a></li><li>csdiy相关课程</li><li><a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer">huggingface</a></li></ul><p>huggingface 是一个开源的模型库，里面有很多预训练的模型，你可以在线运行也可以下载到本地或者云算力平台</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>需要魔法访问,如果你想下载huggingface的模型，可以从<a href="https://hf-mirror.com/" target="_blank" rel="noopener noreferrer">huggingface-cli</a>下载</p></div><ul><li><p><a href="https://www.modelscope.cn/home" target="_blank" rel="noopener noreferrer">魔塔社区</a></p></li><li><p><a href="https://chat.lmsys.org/" target="_blank" rel="noopener noreferrer">模型竞技场</a></p></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>需要魔法访问</p></div><ul><li>中文竞技场</li></ul><h2 id="跑一个大模型" tabindex="-1"><a class="header-anchor" href="#跑一个大模型"><span>跑一个大模型</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>首先要搞清楚自己的电脑的配置，比如内存，显存等等，模型的主页会显示部署它的最小需求</p></div><p>大家耳熟能详的chatgpt等等生成式AI都属于LLM(Large Language Model),得益于开源社区的努力，我们可以很方便的使用这些模型，下面提供几种本地部署的方法</p><ul><li><p><a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">ollama</a></p></li><li><p><a href="https://lmstudio.ai/" target="_blank" rel="noopener noreferrer">LM studio</a></p></li><li><p><a href="https://docs.vllm.ai/en/latest/index.html" target="_blank" rel="noopener noreferrer">vllm</a></p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>相比较而言，使用 LM studio 和 ollama 都比较简单，LM studio甚至有UI界面，vllm是一个加速推理的框架，使用相对复杂一些，不过截止至2024年8月，vllm仍然是模型推理的最佳实践之一</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><ul><li>我在部署模型时到底发生了什么？</li></ul><p>简单来说，你从huggingface上下载好的是<strong>预训练</strong>好的模型，下载好的文件包含<strong>模型权重</strong>、<strong>模型配置</strong>、<strong>词表</strong>等等，你需要在特定的<strong>框架</strong>中加载这些文件，当你向模型输入一段话的时候，实际上，这段话被分词并转化成模型能识别的<strong>token</strong>，然后模型根据这些token输出下一个token，直到输出一个特殊的token，比如说<code>&lt;eos&gt;</code>，这样就完成了一次<strong>推理</strong>，最后根据词表将输出的token转化成人类能看懂的文本。你会发现这个过程就像是一个猜词游戏，由预训练的内容决定一个词出现的概率，哪个概率大就输出哪个，令人迷惑的是这种基于概率的预测在参数足够大的情况下令模型涌现出令人惊叹的能力，所以有人说LLM是&quot;力大砖飞&quot;</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><ul><li>关于llama的申请</li></ul><p>如果你想下载meta的llama系列模型，需要向meta官方申请使用，在国籍部分不能填写中国，其他部分可以随意填写，比如我写的组织是MIT</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>需要魔法</p></div></div><h2 id="云算力平台" tabindex="-1"><a class="header-anchor" href="#云算力平台"><span>云算力平台</span></a></h2><p>个人电脑的配置有限，所以我们经常需要在云算力平台部署模型，下面推荐几个出名的云算力平台</p><ul><li><p><a href="https://openi.pcl.ac.cn/" target="_blank" rel="noopener noreferrer">启智AI</a></p></li><li><p><a href="https://aistudio.baidu.com/index" target="_blank" rel="noopener noreferrer">飞桨</a></p></li><li><p><a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer">colab</a></p></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>colab 需要魔法和谷歌账户</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>以上提到的几个平台都可以白嫖运行时，当然你也可以使用其它你觉得好用的平台</p></div>`,28),l=[p];function i(o,c){return s(),a("div",null,l)}const u=n(e,[["render",i],["__file","AI.html.vue"]]),d=JSON.parse('{"path":"/AI.html","title":"AI","lang":"zh-CN","frontmatter":{"title":"AI","prev":"/security","next":"/about"},"headers":[{"level":2,"title":"相关资源","slug":"相关资源","link":"#相关资源","children":[]},{"level":2,"title":"跑一个大模型","slug":"跑一个大模型","link":"#跑一个大模型","children":[]},{"level":2,"title":"云算力平台","slug":"云算力平台","link":"#云算力平台","children":[]}],"git":{"updatedTime":1721568678000,"contributors":[{"name":"kungfudaibi","email":"1534779821@qq.com","commits":1}]},"filePathRelative":"AI.md","excerpt":"\\n<blockquote>\\n<p>使机械具有人一样的智能</p>\\n</blockquote>\\n<p>最简单的人工智能其实就是条件控制</p>\\n<div class=\\"language-python\\" data-highlighter=\\"prismjs\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"line\\"><span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">:</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">elif</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">:</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">elif</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">:</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span></span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{u as comp,d as data};
