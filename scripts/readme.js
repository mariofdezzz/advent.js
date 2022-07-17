import generateReadme from './readme/generate.js'
import Stats from './readme/stats.js'
import StdIn from './readme/stdin.js'

const stdin = await new StdIn().read()

const stats = new Stats(stdin)

generateReadme(stats.getGlobal())
