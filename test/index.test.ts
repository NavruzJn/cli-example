import {expect, test} from '@oclif/test'

import cmd = require('../src')

describe('@cli/example', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs without token', ctx => {
    expect(ctx.stdout).to.contain('Token undefined')
  })
})
