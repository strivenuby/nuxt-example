# nuxt-svg

> nuxt 2.x 加载 svg 小列子

## 使用 svg-sprite-loader 加载

```javascript
// nuxt.config.js
const { resolve } = require('path')

// 排除 nuxt 原配置的影响
const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
svgRule.exclude = [resolve(__dirname, 'assets/svg')]

// svg 加载
config.module.rules.push({
  test: /\.svg$/,
  include: [resolve(__dirname, 'assets/svg')],
  loader: 'svg-sprite-loader'
})
```

```html
<template>
  <svg aria-hidden="true">
    <use xlink:href="#user"/>
  </svg>
</template>

<script>
import "~/assets/svg/user.svg";
</script>
```

## 自动导入svg

```javascript
// plugins/svg-icon.js

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('~/assets/svg', false, /\.svg$/)
requireAll(req)
```
