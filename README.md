# JSBOX-TYPES

为 JSBOX 添加 TypeScript 声明文件。

本项目为全局声明，需要在`tsconfig.json`的`include`数组包含所有声明文件方可使用：

```
"include": [
    "node_modules/jsbox-types/*.d.ts",
    "node_modules/jsbox-types/*/*.d.ts"
  ]
```

## 命名规则

对于 Objective-C 封装成的对象，直接使用 Objective-C 的类名、或者模仿其风格来命名接口，
比如`NSIndexPath`，`UIColor`，但 UI 模块的各组件除外。

UI 模块的各组件，统一命名为`UIXXXView`，其中`XXX`是文档中组件的英文名。

对于 JSBOX 定义的纯 JS 对象，命名为`JBXXX`，比如`JBSize`。
