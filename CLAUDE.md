# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

uni-ui-x is DCloud's official UI component library for uni-app x. It's a cross-platform mobile UI framework using Vue 3 Composition API and UTS (a TypeScript-like language that compiles to Kotlin/Swift). The library follows a headless design philosophy with no third-party dependencies.

**Language:** Chinese responses preferred.

## Development Commands

```bash
# Development
npm run dev              # Run H5 (web) development server
npm run dev:app-android  # Run Android development

# Testing
npm run test             # Run H5 tests
npm run test:app-android # Run Android tests

# View logs
"C:\hbuilderx\hx_dev\cli.exe" logcat app-android --project uni-ui-x  # Android logs
"C:\hbuilderx\hx_dev\cli.exe" logcat web --browser Chrome --project uni-ui-x  # Web logs
```

## Architecture

- `uni_modules/` - Component library modules (each component is a separate module)
- `pages/` - Demo and test pages for components
- `components/` - Shared utility components
- `store/index.uts` - Global reactive state management

**Component module structure:**
```
uni_modules/[component-name]/
├── components/[component-name]/[component-name].uvue  # Implementation
├── package.json  # Module metadata & platform support
└── readme.md     # API documentation
```

## UTS Language Constraints

UTS is NOT TypeScript. Key differences:
- Strong typing required - no implicit type conversion
- Conditionals must use boolean: write `if (a != null)` not `if (a)`
- Use `| null` or `?` for nullable types, use `?.` for safe calls
- Use `type` not `interface` for object type definitions
- Use `let`/`const` not `var`
- No `undefined` - all variables must be initialized
- No `any` type, no JSX, no prototype chain features
- Prefer `==`/`!=` over `===`/`!==`

Reference: https://doc.dcloud.net.cn/uni-app-x/uts/uts_diff_ts.html

## CSS Constraints

uni-app x CSS is a subset of standard CSS:
- **Layout:** Flexbox only (default flex-direction: column), no float/grid
- **Selectors:** Class selectors only (.class), no other selector types
- **Text:** Text styles (color, font-size) only on `<text>` or `<button>` elements
- **Units:** px (preferred), rpx, percentage only
- **Functions:** Only url(), rgb(), rgba(), var(), env()
- **No:** media queries, scoped styles, inherit/unset keywords, z-index across non-siblings

For responsive logic or animations, implement in script instead of CSS.

## Vue/Component Patterns

- Must use Composition API with `<script lang="uts" setup>`
- `onMounted` can access UniElement but not layout info - use `uni.createSelectorQuery()` for dimensions
- Styling uses Web Component `part` pattern: expose `partname`, customize via `part-class`/`part-style`
- Platform conditional compilation: `// #ifdef APP-ANDROID`, `// #endif`

## Debugging

Print DOM structure on app platform:
```uts
console.log((getCurrentInstance()!.proxy! as BasePage).$nativePage!.getDomJson())
```

## Testing

Jest-based framework. Test files located at `pages/[component]/[component].test.js`.
- Access page data: `page.data()`, `page.setData()`
- Query elements: `page.$()`, `page.$$()`
- Trigger events: `.tap()`, `.dispatchEvent()`
