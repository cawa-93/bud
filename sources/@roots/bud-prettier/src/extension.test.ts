import {describe, expect, it, test} from 'vitest'

import Extension from './index.js'

describe(`@roots/bud-prettier`, () => {
  it(`should be constructable`, () => {
    expect(Extension).toBeInstanceOf(Function)
  })

  test.todo(`improve this spec`)
})
