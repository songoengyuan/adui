---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

虚拟滚动，处理 `10000` 行数据：

```jsx
  const options = []
  for (let i = 0; i < 10000; i++) {
    const value = `${i.toString(36)}${i}`
    options.push({
      value,
    })
  }

  return (
    <Select searchable style={{ width: "50%" }}>
      {options.map(({ value }) => (
        <Select.Option value={value}>{value}</Select.Option>
      ))}
    </Select>
  )
```

## Alert

### 虚拟滚动与 dropdownMatchSelectWidth Prop

当 `dropdownMatchSelectWidth` 为 `false` 时，虚拟滚动将失效。在 adui 1.0 前，此 Prop 默认为 `false`，现在改为 `true`，请注意对样式的影响。
