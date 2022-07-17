import Stats from './readme/stats.js'
import StdIn from './readme/stdin.js'

const stdin = await new StdIn().read()

const stats = new Stats(stdin)

const { total, pass, fail, cancelled, skipped, todo, duration } =
  stats.getGlobal()

if (fail > 0) console.error(stdin)
console.table({ total, pass, fail, cancelled, skipped, todo })
console.log(`${duration} ms`)
