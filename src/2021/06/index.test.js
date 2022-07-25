import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import sumPairs from './index.js'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    deepStrictEqual(sumPairs([-3, -2, 7, -5], 10), null)
  })

  it('Ejemplo 02', () => {
    deepStrictEqual(sumPairs([2, 2, 3, 1], 4), [2, 2])
  })

  it('Ejemplo 03', () => {
    deepStrictEqual(sumPairs([6, 7, 1, 2], 8), [6, 2])
  })

  it('Ejemplo 04', () => {
    deepStrictEqual(
      sumPairs([0, 2, 2, 3, -1, 1, 5], 6),
      [1, 5]
    )
  })
})
