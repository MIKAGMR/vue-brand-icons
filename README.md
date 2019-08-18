# vue-brand-icons
[![travis build](https://img.shields.io/travis/MIKAGMR/vue-brand-icons?style=flat-square)](https://travis-ci.org/MIKAGMR/vue-brand-icons)
[![version](https://img.shields.io/npm/v/vue-brand-icons.svg?style=flat-square)](http://npm.im/vue-brand-icons)
[![license](https://img.shields.io/npm/l/vue-brand-icons?style=flat-square)](http://opensource.org/licenses/MIT)


This is a fork of [vue-feather-icons](https://github.com/egoist/vue-feather-icons) and use [simple-icons](https://github.com/simple-icons/simple-icons).
Please support the orginal author: [egoist](https://github.com/egoist) 

## Install

```bash
yarn add vue-brand-icons
```

## Usage

```js
// Only import what you need!
import { AdobeIcon, PinterestIcon, ... } from 'vue-brand-icons'
```

### Sizing

By default, icons will be sized based on the font size of the parent element.

You can set a custom size using the `size` attribute. 
For multiple based sizing, pass the desired multiple followed by an `x`.

```html
<adobe-icon size="1.5x" class="custom-class"></adobe-icon> 
```

You can also set a `px` size directly by just passing an integer

```html
<adobe-icon size="25" class="custom-class"></adobe-icon> 
```

## Tree shaking

By using ES imports like `import { AirplayIcon } from 'vue-feather-icons'` with [webpack + minifier](https://webpack.js.org/guides/tree-shaking/#minify-the-output) or Rollup, unused exports in this module will be automatically eliminated.

To make webpack tree shaking work without using any minifier, you can use the per-file icons from [`icons`](https://unpkg.com/vue-feather-icons/icons/) directory, e.g. `import AirplayIcon from 'vue-feather-icons/icons/AirplayIcon'`.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author
**vue-brand-icons** © [MIKAGMR](https://github.com/mikagmr), Released under the [MIT](./LICENSE) License.

## Original Author
**vue-feather-icons** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vue-feather-icons/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
