webpackJsonp(["components/table/demo"],{"/d+a":function(n,a){n.exports={content:["article",["p","\u6309\u94ae\u7c7b\u578b"],["pre",{lang:"jsx",highlighted:'  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      editVisible<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// Menu \u7684\u4f7f\u7528\u5fc5\u987b\u914d\u5408 Popover \u7684 visible \u72b6\u6001</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  render <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>\n      editVisible<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span>\n          <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">:</span> i <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">headerEmphasized</span>\n          <span class="token attr-name">expandedRowRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">"16px 0px 16px 24px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u8fd9\u662f\u8981\u5c55\u793a\u7684\u5185\u5bb9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          onExpandChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table.Column</span> <span class="token attr-name">dataIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9879\u76ee<span class="token punctuation">"</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"\u9879\u76ee\u4e00"</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table.Column</span>\n            <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">120</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">dataIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>\n            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6295\u653e\u65f6\u95f4<span class="token punctuation">"</span></span>\n            <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>adui-componentDoc-table-time<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                <span class="token number">2017</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">18</span>\n                <span class="token operator">&lt;</span>Popconfirm\n                  popupStyle<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> maxWidth<span class="token punctuation">:</span> <span class="token string">"initial"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">alignEdge</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span>\n                  <span class="token attr-name">popup</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>adui-componentDoc-table-time-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4fee\u6539\u6295\u653e\u65f6\u95f4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n                      <span class="token operator">&lt;</span>Form\n                        itemStyle<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">"20px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n                      <span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5f00\u59cb\u6295\u653e<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">closeOnSelect</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">"12px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n                          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">closeOnSelect</span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>00:00<span class="token punctuation">"</span></span> <span class="token attr-name">onlyHour</span> <span class="token punctuation">/></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7ed3\u675f\u6295\u653e<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">closeOnSelect</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">"12px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n                          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">closeOnSelect</span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>00:00<span class="token punctuation">"</span></span> <span class="token attr-name">onlyHour</span> <span class="token punctuation">/></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n                  <span class="token punctuation">)</span><span class="token punctuation">}</span>\n                <span class="token operator">></span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span>\n                    <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>edit-outlined<span class="token punctuation">"</span></span>\n                    <span class="token attr-name">interactive</span>\n                  <span class="token punctuation">/></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popconfirm</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table.Column</span> <span class="token attr-name">dataIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6570\u636e\u9879<span class="token punctuation">"</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"92,435,344"</span><span class="token punctuation">}</span></span> <span class="token attr-name">onSort</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table.Column</span> <span class="token attr-name">dataIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6570\u636e\u9879<span class="token punctuation">"</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"3,635"</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table.Column</span>\n            <span class="token attr-name">dataIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span>\n            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7f16\u8f91<span class="token punctuation">"</span></span>\n            <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n              <span class="token operator">&lt;</span>Popover\n                arrowed<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n                popup<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>\n                  <span class="token operator">&lt;</span>Menu\n                    onItemClick<span class="token punctuation">=</span><span class="token punctuation">{</span>index <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> editVisible<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n                  <span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u505c\u6b62\u6295\u653e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u5220\u9664\u5e7f\u544a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>\n                <span class="token punctuation">)</span><span class="token punctuation">}</span>\n                visible<span class="token operator">=</span><span class="token punctuation">{</span>editVisible<span class="token punctuation">}</span>\n                onVisibleChange<span class="token operator">=</span><span class="token punctuation">{</span>bool <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> editVisible<span class="token punctuation">:</span> bool <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n                trigger<span class="token operator">=</span><span class="token string">"click"</span>\n              <span class="token operator">></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>adui-componentDoc-table-edit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                  \u7f16\u8f91\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>triangle-down<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span><span class="token template-string"><span class="token string">`\n          .adui-componentDoc-table-time-title { margin-bottom: 16px;font-size: 14px;line-height: 24px;color: #1f1f1f;font-weight: 600; }\n          .adui-componentDoc-table-edit { display: flex;align-items: center;cursor: pointer; }\n          .adui-componentDoc-table-edit::after { content: "";position: absolute;top: 0;left: 0;width: 100%; height: 100%; }\n          .adui-componentDoc-table-time { display: flex;align-items: center; }\n          .adui-componentDoc-table-time svg { margin-left: 12px; }\n        `</span></span><span class="token punctuation">}</span></span><span class="token attr-name">}</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>'},["code",'  constructor(props) {\n    super(props)\n\n    this.state = {\n      editVisible: false, // Menu \u7684\u4f7f\u7528\u5fc5\u987b\u914d\u5408 Popover \u7684 visible \u72b6\u6001\n    }\n  }\n\n  render () {\n    const {\n      editVisible,\n    } = this.state\n    return (\n      <section>\n        <Table\n          dataSource={Array.from(new Array(1), (_, i) => ({ key: i }))}\n          headerEmphasized\n          expandedRowRender={() => (<div style={{ padding: "16px 0px 16px 24px" }}>\u8fd9\u662f\u8981\u5c55\u793a\u7684\u5185\u5bb9</div>)}\n          onExpandChange={() => {}}\n        >\n          <Table.Column dataIndex="0" title="\u9879\u76ee" render={() => "\u9879\u76ee\u4e00"} />\n          <Table.Column\n            width={120}\n            dataIndex="1"\n            title="\u6295\u653e\u65f6\u95f4"\n            render={() => (\n              <div className="adui-componentDoc-table-time">\n                2017-08-18\n                <Popconfirm\n                  popupStyle={{ maxWidth: "initial" }}\n                  alignEdge={false}\n                  placement="bottom"\n                  popup={(\n                    <div>\n                      <div className="adui-componentDoc-table-time-title">\u4fee\u6539\u6295\u653e\u65f6\u95f4</div>\n                      <Form\n                        itemStyle={{ marginBottom: "20px" }}\n                      >\n                        <Form.Item label="\u5f00\u59cb\u6295\u653e">\n                          <DatePicker closeOnSelect defaultValue={new Date()} style={{ marginRight: "12px" }} />\n                          <TimePicker closeOnSelect defaultValue="00:00" onlyHour />\n                        </Form.Item>\n                        <Form.Item label="\u7ed3\u675f\u6295\u653e">\n                          <DatePicker closeOnSelect defaultValue={new Date()} style={{ marginRight: "12px" }} />\n                          <TimePicker closeOnSelect defaultValue="00:00" onlyHour />\n                        </Form.Item>\n                      </Form>\n                    </div>\n                  )}\n                >\n                  <Icon\n                    icon="edit-outlined"\n                    interactive\n                  />\n                </Popconfirm>\n              </div>\n            )}\n          />\n          <Table.Column dataIndex="2" title="\u6570\u636e\u9879" render={() => "92,435,344"} onSort={() => {}} />\n          <Table.Column dataIndex="3" title="\u6570\u636e\u9879" render={() => "3,635"} />\n          <Table.Column\n            dataIndex="4"\n            title="\u7f16\u8f91"\n            render={() => (\n              <Popover\n                arrowed={false}\n                popup={(\n                  <Menu\n                    onItemClick={index => this.setState({ editVisible: false })}\n                  >\n                    <Menu.Item index="0">\u505c\u6b62\u6295\u653e</Menu.Item>\n                    <Menu.Item index="1">\u5220\u9664\u5e7f\u544a</Menu.Item>\n                  </Menu>\n                )}\n                visible={editVisible}\n                onVisibleChange={bool => this.setState({ editVisible: bool })}\n                trigger="click"\n              >\n                <div className="adui-componentDoc-table-edit">\n                  \u7f16\u8f91\n                  <Icon icon="triangle-down" />\n                </div>\n              </Popover>\n            )}\n          />\n        </Table>\n        <style dangerouslySetInnerHTML={{ __html:`\n          .adui-componentDoc-table-time-title { margin-bottom: 16px;font-size: 14px;line-height: 24px;color: #1f1f1f;font-weight: 600; }\n          .adui-componentDoc-table-edit { display: flex;align-items: center;cursor: pointer; }\n          .adui-componentDoc-table-edit::after { content: "";position: absolute;top: 0;left: 0;width: 100%; height: 100%; }\n          .adui-componentDoc-table-time { display: flex;align-items: center; }\n          .adui-componentDoc-table-time svg { margin-left: 12px; }\n        `}} />\n      </section>\n    )\n  }']]],meta:{order:0,title:{"zh-CN":"\u6309\u94ae\u7c7b\u578b","en-US":"Type"},filename:"components/table/demo/basic.md"}}},H9xN:function(n,a,s){n.exports={basic:s("/d+a")}}});