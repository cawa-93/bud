import {join} from 'node:path'

import {paths} from '@repo/constants'
import execa from '@roots/bud-support/execa'
import {Filesystem} from '@roots/bud-support/filesystem'
import {beforeAll, describe, expect, it} from 'vitest'

describe(`issue-1995`, () => {
  let fs: Filesystem

  beforeAll(async () => {
    fs = new Filesystem()

    await execa(`yarn`, [`bud`, `clean`], {
      cwd: join(paths.tests, `reproductions`, `issue-1955`),
    })

    await execa(`yarn`, [`bud`, `build`], {
      cwd: join(paths.tests, `reproductions`, `issue-1955`),
    })
  }, 30000)

  it(`should generate app.js`, async () => {
    const file = await fs.read(
      join(
        paths.tests,
        `reproductions`,
        `issue-1955`,
        `dist`,
        `js`,
        `app.js`,
      ),
      `utf8`,
    )
    expect(file.length).toBeGreaterThan(0)
  })
}, 120000)
