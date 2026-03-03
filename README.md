# JSBOX-TYPES

TypeScript declaration files for JSBox.

## Installation

```
npm i -D jsbox-types
```

This package provides global declarations, so your `tsconfig.json` must include it in the `types` field:

```
{
  "compilerOptions": {
    "types": ["jsbox-types"]
  }
}
```

Or include the declaration file directly:

```
"include": [
    "node_modules/jsbox-types/index.d.ts"
  ]
```

## Naming Conventions

For objects wrapped from Objective-C, use the original Objective-C class names or follow the same naming style for interfaces,
such as `NSIndexPath` and `UIColor`, except for components in the UI module.

Components in the UI module are uniformly named `UIXXXView`, where `XXX` is the component's English name as shown in the documentation.

Pure JavaScript objects defined by JSBox are named `JBXXX`, such as `JBSize`.
