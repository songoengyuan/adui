webpackJsonp(["components/menu/demo"],{M1Gy:function(n,s,a){n.exports={basic:a("f4h5")}},f4h5:function(n,s){n.exports={content:["article",["p","\u4e0b\u62c9\u5c55\u5f00\u884c\u52a8\u83dc\u5355 (Action Menu)\uff1a"],["pre",{lang:"jsx",highlighted:'  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      visible<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  render <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> visible <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>\n        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onVisibleChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>visible <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">arrowed</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">popup</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>Menu\n            onItemClick<span class="token punctuation">=</span><span class="token punctuation">{</span>index <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7f16\u8f91\u5e7f\u544a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u5220\u9664\u5e7f\u544a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.SubMenu</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-1<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u53e6\u5b58\u4e3a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0-0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>PDF<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7f51\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.SubMenu</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-0-2<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u56fe\u7247<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Jpeg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Png<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Webp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.SubMenu</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.SubMenu</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">}</span>\n        trigger<span class="token operator">=</span><span class="token string">"click"</span>\n      <span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">leftIcon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>download<span class="token punctuation">"</span></span> <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u4e0b\u8f7d\u8be6\u7ec6\u6570\u636e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>'},["code",'  constructor(props) {\n    super(props)\n\n    this.state = {\n      visible: false,\n    }\n  }\n\n  render () {\n    const { visible } = this.state\n    return (\n      <Popover\n        visible={visible}\n        onVisibleChange={visible => this.setState({ visible })}\n        arrowed={false}\n        popup={(\n          <Menu\n            onItemClick={index => this.setState({ visible: false })}\n          >\n            <Menu.Item index="1">\u7f16\u8f91\u5e7f\u544a</Menu.Item>\n            <Menu.Item index="2">\u5220\u9664\u5e7f\u544a</Menu.Item>\n            <Menu.SubMenu index="sub-1" title="\u53e6\u5b58\u4e3a">\n              <Menu.Item index="0-0">PDF</Menu.Item>\n              <Menu.Item index="0-1">\u7f51\u9875</Menu.Item>\n              <Menu.SubMenu index="sub-0-2" title="\u56fe\u7247">\n                <Menu.Item index="0-2">Jpeg</Menu.Item>\n                <Menu.Item index="0-3">Png</Menu.Item>\n                <Menu.Item index="0-4">Webp</Menu.Item>\n              </Menu.SubMenu>\n            </Menu.SubMenu>\n          </Menu>\n        )}\n        trigger="click"\n      >\n        <Button leftIcon="download" active={visible}>\u4e0b\u8f7d\u8be6\u7ec6\u6570\u636e</Button>\n      </Popover>\n    )\n  }']]],meta:{order:0,title:{"zh-CN":"\u5185\u90e8\u9a71\u52a8","en-US":"Type"},filename:"components/menu/demo/basic.md"}}}});