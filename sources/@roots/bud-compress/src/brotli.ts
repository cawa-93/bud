import type {Options} from '@roots/bud-compress'

import zlib from 'node:zlib'

import {type Bud} from '@roots/bud-framework'
import {Extension} from '@roots/bud-framework/extension'
import {
  bind,
  disabled,
  label,
  options,
  plugin,
} from '@roots/bud-framework/extension/decorators'
import {deprecated} from '@roots/bud-support/decorators'
import Plugin from 'compression-webpack-plugin'

/**
 * Brotli compression configuration
 */
@label(`@roots/bud-compress/brotli`)
@plugin(Plugin)
@options<Options>({
  algorithm: `brotliCompress`,
  compressionOptions: {
    params: {
      [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
    },
  },
  deleteOriginalAssets: false,
  filename: `[path][name].gz[query]`,
  minRatio: 0.8,
  test: /\.(js|css|html?|svg)$/,
  threshold: 0,
})
@disabled
export default class BudBrotli extends Extension<Options, Plugin> {
  /**
   * @deprecated Use `bud.compress.brotli.setOptions()` instead.
   */
  @deprecated(
    `bud.compress.brotli`,
    `Use bud.compress.brotli.set instead`,
    [
      [
        `set deleteOriginalAssets`,
        `bud.compress.brotli.set('deleteOriginalAssets', true)`,
      ],
    ],
  )
  public async config(options?: Options): Promise<Bud> {
    this.enable()
    options && this.setOptions(options)
    return this.app
  }

  /**
   * {@link Extension.register}
   */
  @bind
  public override async register(bud: Bud) {
    bud.bindFacade(`brotli`, this.config, this)
  }
}

export type {Options}
