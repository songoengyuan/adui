(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1521:function(n,a,s){n.exports={basic:s(1592)}},1592:function(n,a){n.exports={content:["article",["p","展开/收起表单信息："],["pre",{lang:"jsx",highlighted:'  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">"名称"</span><span class="token punctuation">:</span> <span class="token string">"微信广告助手"</span><span class="token punctuation">,</span>\n    <span class="token string">"城市"</span><span class="token punctuation">:</span> <span class="token string">"深圳市"</span><span class="token punctuation">,</span>\n    <span class="token string">"性别"</span><span class="token punctuation">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span>\n    <span class="token string">"电子邮箱"</span><span class="token punctuation">:</span> <span class="token string">"donon@gmail.com"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> handleClick <span class="token operator">=</span> expanded <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> dataNew <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>data<span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>expanded<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">delete</span> dataNew<span class="token punctuation">[</span><span class="token string">"职业"</span><span class="token punctuation">]</span>\n      <span class="token keyword">delete</span> dataNew<span class="token punctuation">[</span><span class="token string">"特长"</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      dataNew<span class="token punctuation">[</span><span class="token string">"职业"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"视觉设计师"</span>\n      dataNew<span class="token punctuation">[</span><span class="token string">"特长"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Brawl Stars"</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">setData</span><span class="token punctuation">(</span>dataNew<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">const</span> expanded <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">4</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span>\n      <span class="token attr-name">itemStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">"12px"</span><span class="token punctuation">,</span> fontSize<span class="token punctuation">:</span> <span class="token string">"13px"</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">"#636363"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">labelStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">"16px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">labelSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Motion</span> <span class="token attr-name">transition</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zoom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>key <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span></span> <span class="token attr-name">label</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Motion</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">handleClick</span><span class="token punctuation">(</span>expanded<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> display<span class="token punctuation">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span> alignItems<span class="token punctuation">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span> fontSize<span class="token punctuation">:</span> <span class="token string">"13px"</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">"var(--ad-blue)"</span><span class="token punctuation">,</span> fontWeight<span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">,</span> cursor<span class="token punctuation">:</span> <span class="token string">"pointer"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          expanded <span class="token operator">?</span> <span class="token string">"收起"</span> <span class="token punctuation">:</span> <span class="token string">"展开全部信息"</span>\n        <span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`arrow-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>expanded <span class="token operator">?</span> <span class="token string">"up"</span> <span class="token punctuation">:</span> <span class="token string">"down"</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>var(--ad-blue)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>'},["code",'  const [data, setData] = useState({\n    "名称": "微信广告助手",\n    "城市": "深圳市",\n    "性别": "男",\n    "电子邮箱": "donon@gmail.com",\n  })\n\n  const handleClick = expanded => {\n    const dataNew = {...data}\n    if (expanded) {\n      delete dataNew["职业"]\n      delete dataNew["特长"]\n    } else {\n      dataNew["职业"] = "视觉设计师"\n      dataNew["特长"] = "Brawl Stars"\n    }\n    setData(dataNew)\n  }\n\n  const expanded = Object.keys(data).length > 4\n\n  return (\n    <Form\n      itemStyle={{ marginBottom: "12px", fontSize: "13px", color: "#636363" }}\n      labelStyle={{ marginRight: "16px" }}\n      labelSize={4}\n    >\n      <Motion transition="zoom">\n        {\n          Object.keys(data).map(key => (\n            <Form.Item key={key} label={key}>{ data[key] }</Form.Item>\n          ))\n        }\n      </Motion>\n      <div\n        onClick={() => handleClick(expanded)}\n        style={{ display: "flex", alignItems: "center", fontSize: "13px", color: "var(--ad-blue)", fontWeight: 500, cursor: "pointer" }}\n      >\n        {\n          expanded ? "收起" : "展开全部信息"\n        }\n        <Icon icon={`arrow-${expanded ? "up" : "down"}`} color="var(--ad-blue)" />\n      </div>\n    </Form>\n  )']]],meta:{order:0,title:{"zh-CN":"内部驱动","en-US":"Type"},filename:"components/form/demo/basic.md"}}}}]);