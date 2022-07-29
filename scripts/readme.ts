import generateReadme from './readme/generate'
import Stats from './readme/stats'
import StdIn from './readme/stdin'

async function readme() {
  const stdin = await new StdIn().read()

  const stats = new Stats(stdin)

  generateReadme({
    resume: stats.getResume(),
    tests: stats.getTests(),
  })
}
readme()
