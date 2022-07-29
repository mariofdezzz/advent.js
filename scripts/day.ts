import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

const testTemplate = `import { strictEqual, deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import funct from './index.mjs'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    
  })
})
`

mkdirSync(
  join(process.cwd(), 'src', '2021', process.argv[2]),
  {
    recursive: true,
  }
)

writeFileSync(
  join(
    process.cwd(),
    'src',
    '2021',
    process.argv[2],
    'index.mjs'
  ),
  '',
  { flag: 'wx' }
)
writeFileSync(
  join(
    process.cwd(),
    'src',
    '2021',
    process.argv[2],
    'index.test.mjs'
  ),
  testTemplate,
  { flag: 'wx' }
)
writeFileSync(
  join(
    process.cwd(),
    'src',
    '2021',
    process.argv[2],
    'README.md'
  ),
  '',
  { flag: 'wx' }
)
