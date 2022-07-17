import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

const testTemplate = `import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    
  })
})
`

mkdirSync(join(process.cwd(), 'src', '2021', process.argv[2]), {
  recursive: true,
})

writeFileSync(
  join(process.cwd(), 'src', '2021', process.argv[2], 'index.js'),
  ''
)
writeFileSync(
  join(process.cwd(), 'src', '2021', process.argv[2], 'index.test.js'),
  testTemplate
)
writeFileSync(
  join(process.cwd(), 'src', '2021', process.argv[2], 'README.md'),
  ''
)
