import { readFile, writeFile } from 'fs/promises'
import Mustache from 'mustache'
import { join } from 'path'

/**
 * Generate repo README based on stats.
 */
export default async function generate(stats) {
  const { total, pass, fail, skipped } = stats
  const passRatio = Math.round((pass / total) * 100)

  const template = (
    await readFile(
      join(
        process.cwd(),
        'scripts',
        'readme',
        'README.template'
      )
    )
  ).toString()

  const readme = Mustache.render(template, {
    pass,
    fail,
    skipped,
    testBadgeColor:
      passRatio < 50
        ? 'red'
        : passRatio < 70
        ? 'orange'
        : passRatio < 100
        ? 'yellow'
        : 'brightgreen',
  })

  await writeFile(join(process.cwd(), 'README.md'), readme)
}
