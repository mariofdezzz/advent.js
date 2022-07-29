import { readFile, writeFile } from 'fs/promises'
import Mustache from 'mustache'
import { join } from 'path'
import { Resume, Test } from './types'

/**
 * Generate repo README based on stats.
 */
export default async function generate({
  resume,
  tests,
}: {
  resume: Resume
  tests: Test[]
}) {
  const { pass, fail, skipped } = resume
  const passRatio = Math.round((pass / 25) * 100)
  const days = new Array(25).fill(0).map((_, i) => {
    const day = i + 1 > 9 ? i + 1 + '' : `0${i + 1}`
    const test = tests.find((test) => test.day === day)

    return {
      day,
      status:
        test !== undefined
          ? test.pass
            ? 'Passing'
            : 'Failing'
          : 'Not_done',
      duration: test?.duration,
    }
  })

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
    days,
    testBadgeColor:
      fail > 0
        ? 'red'
        : passRatio < 35
        ? 'orange'
        : passRatio < 70
        ? 'yellow'
        : passRatio < 100
        ? 'yellowgreen'
        : 'brightgreen',
    statusBadgeColor(): string {
      // FIX: fix links and alt text
      const statuses = {
        Passing: 'brightgreen',
        Failing: 'red',
        Not_done: 'yellow',
      }
      return statuses[this.status as keyof typeof statuses]
    },
    durationString(): string {
      return this.duration
        ? this.duration.toFixed(4) + 'ms'
        : ''
    },
  })

  await writeFile(join(process.cwd(), 'README.md'), readme)
}
