import { Resume, Test } from './types'

export default class Stats {
  // Test Anything Protocol (TAP)
  private tap: string[]

  constructor(tap: string) {
    this.tap = tap.split('\n')
  }

  getTests(): Test[] {
    const tests = this.tap.reduce<string[][]>(
      (acc, value, idx, arr) => {
        if (/^# Subtest/.test(value)) {
          const end = arr.indexOf('  ...', idx) + 1
          const test = arr.slice(idx, end)

          acc.push(test)
        }

        return acc
      },
      []
    )

    return tests.map((test) => {
      const year =
        test[0].match(/(?<=\/)\d{4}(?=\/)/)?.[0] ?? ''
      const day =
        test[0].match(/(?<=\/)\d{2}(?=\/)/)?.[0] ?? ''
      const pass = test[1].startsWith('ok')
      const duration =
        this.getNumberInLine(test.at(-2) ?? '999') ?? -1

      return {
        year,
        day,
        pass,
        duration,
      }
    })
  }

  getResume(): Resume {
    const resume = this.tap.slice(this.tap.length - 7)

    return {
      total: this.getNumberInLine(resume[0]),
      pass: this.getNumberInLine(resume[1]),
      fail: this.getNumberInLine(resume[2]),
      cancelled: this.getNumberInLine(resume[3]),
      skipped: this.getNumberInLine(resume[4]),
      todo: this.getNumberInLine(resume[5]),
      duration: this.getNumberInLine(resume[6]),
    }
  }

  private getNumberInLine(line: string) {
    const match = line.match(/\d+(\.\d+)?/)

    return match !== null ? parseFloat(match[0]) : -1
  }
}
