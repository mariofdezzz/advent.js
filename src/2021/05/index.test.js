import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import daysToXmas from './index.js'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    const date = new Date('Dec 1, 2021')

    strictEqual(daysToXmas(date), 24)
  })

  it('Ejemplo 02', () => {
    const date = new Date('Dec 24, 2021 00:00:01')

    strictEqual(daysToXmas(date), 1)
  })

  it('Ejemplo 03', () => {
    const date = new Date('Dec 24, 2021 23:59:59')

    strictEqual(daysToXmas(date), 1)
  })

  it('Ejemplo 04', () => {
    const date = new Date('December 20, 2021 03:24:00')

    strictEqual(daysToXmas(date), 5)
  })

  it('Ejemplo 05', () => {
    const date = new Date('Dec 26, 2021')

    strictEqual(daysToXmas(date), -1)
  })

  it('Ejemplo 06', () => {
    const date = new Date('Dec 31, 2021')

    strictEqual(daysToXmas(date), -6)
  })

  it('Ejemplo 07', () => {
    const date = new Date('Jan 1, 2022 00:00:01')

    strictEqual(daysToXmas(date), -7)
  })

  it('Ejemplo 08', () => {
    const date = new Date('Jan 1, 2022 23:59:59')

    strictEqual(daysToXmas(date), -7)
  })

  it('Ejemplo 09', () => {
    const date = new Date('Dec 25, 2021')

    strictEqual(daysToXmas(date), 0)
  })
})
