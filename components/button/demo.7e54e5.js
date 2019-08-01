webpackJsonp(["components/button/demo"],{NVDo:function(n,s,a){n.exports={basic:a("kkgJ"),buttonGroup:a("iJge")}},iJge:function(n,s){n.exports={content:["article",["p","\u6309\u94ae\u7ec4 (",["code","Button.Group"],")\uff1a"],["pre",{lang:"jsx",highlighted:'  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      activeIndex<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  \n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> activeIndex <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button.Group</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">"20px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span>\n            <span class="token punctuation">[</span><span class="token string">"\u9009\u9879\u4e00"</span><span class="token punctuation">,</span> <span class="token string">"\u9009\u9879\u4e8c"</span><span class="token punctuation">,</span> <span class="token string">"\u9009\u9879\u4e09"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n                <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span>\n                <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index <span class="token operator">===</span> activeIndex<span class="token punctuation">}</span></span>\n                <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> activeIndex<span class="token punctuation">:</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n              <span class="token punctuation">></span></span>\n                <span class="token punctuation">{</span> text <span class="token punctuation">}</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button.Group</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button.Group</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span>\n            <span class="token punctuation">[</span>\n              <span class="token string">"format-align-left"</span><span class="token punctuation">,</span>\n              <span class="token string">"format-align-center"</span><span class="token punctuation">,</span>\n              <span class="token string">"format-align-right"</span><span class="token punctuation">,</span>\n              <span class="token string">"format-align-justify"</span><span class="token punctuation">,</span>\n            <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>icon<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n                <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>icon<span class="token punctuation">}</span></span>\n                <span class="token attr-name">leftIcon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>icon<span class="token punctuation">}</span></span>\n                <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index <span class="token operator">===</span> activeIndex<span class="token punctuation">}</span></span>\n                <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> activeIndex<span class="token punctuation">:</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n              <span class="token punctuation">/></span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button.Group</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>'},["code",'  constructor(props) {\n    super(props)\n\n    this.state = {\n      activeIndex: 0,\n    }\n  }\n  \n  render() {\n    const { activeIndex } = this.state\n    return (\n      <div>\n        <Button.Group style={{ marginRight: "20px" }}>\n          {\n            ["\u9009\u9879\u4e00", "\u9009\u9879\u4e8c", "\u9009\u9879\u4e09"].map((text, index) => (\n              <Button\n                key={text}\n                active={index === activeIndex}\n                onClick={() => this.setState({ activeIndex: index })}\n              >\n                { text }\n              </Button>\n            ))\n          }\n        </Button.Group>\n        <Button.Group>\n          {\n            [\n              "format-align-left",\n              "format-align-center",\n              "format-align-right",\n              "format-align-justify",\n            ].map((icon, index) => (\n              <Button\n                key={icon}\n                leftIcon={icon}\n                active={index === activeIndex}\n                onClick={() => this.setState({ activeIndex: index })}\n              />\n            ))\n          }\n        </Button.Group>\n      </div>\n    )\n  }']]],meta:{order:1,title:{"zh-CN":"\u6309\u94ae\u7ec4","en-US":"Group"},filename:"components/button/demo/buttonGroup.md"}}},kkgJ:function(n,s){n.exports={content:["article",["p","\u70b9\u51fb\u5207\u6362\u6309\u94ae\u7c7b\u578b ",["code","intent"],"\uff1a"],["pre",{lang:"jsx",highlighted:'  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      copied<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleToggle <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">{</span> copied <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> copied<span class="token punctuation">:</span> <span class="token operator">!</span>copied <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  \n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> copied <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n        <span class="token attr-name">leftIcon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>copied <span class="token operator">?</span> <span class="token string">"tick-circle"</span> <span class="token punctuation">:</span> <span class="token string">"copy-outlined"</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">intent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>copied <span class="token operator">?</span> <span class="token string">"primary"</span> <span class="token punctuation">:</span> <span class="token string">"normal"</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleToggle<span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span> copied <span class="token operator">?</span> <span class="token string">"\u5df2\u590d\u5236"</span> <span class="token punctuation">:</span> <span class="token string">"\u590d\u5236\u4ee3\u7801"</span> <span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>'},["code",'  constructor(props) {\n    super(props)\n\n    this.state = {\n      copied: false,\n    }\n\n    this.handleToggle = () => {\n      const { copied } = this.state\n      this.setState({ copied: !copied })\n    }\n  }\n  \n  render() {\n    const { copied } = this.state\n    return (\n      <Button\n        leftIcon={copied ? "tick-circle" : "copy-outlined"}\n        intent={copied ? "primary" : "normal"}\n        theme="light"\n        onClick={this.handleToggle}\n      >\n        { copied ? "\u5df2\u590d\u5236" : "\u590d\u5236\u4ee3\u7801" }\n      </Button>\n    )\n  }']]],meta:{order:0,title:{"zh-CN":"\u6309\u94ae\u7c7b\u578b","en-US":"Intent"},filename:"components/button/demo/basic.md"}}}});