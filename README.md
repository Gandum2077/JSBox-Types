# JSBOX-TYPES

为JSBOX添加TypeScript声明文件。

本项目为全局声明，需要在`tsconfig.json`的`include`数组包含所有声明文件方可使用：
```
"include": [
    "node_modules/jsbox-types/*.d.ts",
    "node_modules/jsbox-types/*/*.d.ts"
  ]
```

## 命名规则

对于Objective-C封装成的对象，直接使用Objective-C的类名、或者模仿其风格来命名接口，比如`NSIndexPath`，`UIColor`，但UI模块的各组件除外。

UI模块的各组件，统一命名为`UIXXXView`，其中`XXX`是文档中组件的英文名。

对于JSBOX定义的纯JS对象，命名为`JBXXX`，比如`JBSize`。