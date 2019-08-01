webpackJsonp(["components/checkbox/demo"],{ANo9:function(n,s){n.exports={content:["article",["p","\u6c14\u6ce1\u63d0\u793a\u5e2e\u52a9\u4fe1\u606f\uff1a"],["pre",{lang:"jsx",highlighted:'  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      value<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  render <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox.Group</span>\n          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">helper</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6c14\u6ce1\u63d0\u793a\u5e2e\u52a9\u4fe1\u606f<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u591a\u9009<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u591a\u9009<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u591a\u9009<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox.Group</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>'},["code",'  constructor(props) {\n    super(props)\n\n    this.state = {\n      value: [1],\n    }\n  }\n  render () {\n    const { value } = this.state\n    return (\n      <section>\n        <Checkbox.Group\n          size="mini"\n          value={value}\n          onChange={value => this.setState({ value })}\n        >\n          <Checkbox value={1} helper="\u6c14\u6ce1\u63d0\u793a\u5e2e\u52a9\u4fe1\u606f">\u591a\u9009</Checkbox>\n          <Checkbox value={2}>\u591a\u9009</Checkbox>\n          <Checkbox value={3}>\u591a\u9009</Checkbox>\n        </Checkbox.Group>\n      </section>\n    )\n  }']]],meta:{order:0,title:{"zh-CN":"\u5185\u90e8\u9a71\u52a8","en-US":"Type"},filename:"components/checkbox/demo/basic.md"}}},GAOr:function(n,s,a){n.exports={basic:a("ANo9")}}});