import { writeFileSync } from 'fs'
import { join } from 'path'

writeFileSync(join(process.cwd(), 'src', '2021', `${process.argv[2]}.js`), '')
writeFileSync(
  join(process.cwd(), 'test', '2021', `${process.argv[2]}.test.js`),
  ''
)
