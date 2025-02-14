// Copyright © Roots Software Foundation LLC
// Licensed under the MIT license.

/**
 * @roots/bud-mdx
 * @see https://bud.js.org
 * @see https://github.com/roots/bud
 */

import type Item from '@roots/bud-build/item'
import type Loader from '@roots/bud-build/loader'
import type Rule from '@roots/bud-build/rule'

import {default as BudMDX} from '@roots/bud-mdx/extension'

declare module '@roots/bud-framework' {
  interface Bud {
    mdx: {
      get: BudMDX[`get`]
      getOptions: BudMDX[`getOptions`]
      set: BudMDX[`set`]
      setOptions: BudMDX[`setOptions`]
    }
  }

  interface Loaders {
    mdx: Loader
  }

  interface Items {
    mdx: Item
  }

  interface Rules {
    mdx: Rule
  }

  interface Patterns {
    mdx: RegExp
  }

  interface Modules {
    '@roots/bud-mdx': Bud[`mdx`]
  }
}

export default BudMDX
