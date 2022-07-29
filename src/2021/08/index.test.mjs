import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import maxProfit from './index.mjs'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    const pricesBtc = [39, 18, 29, 25, 34, 32, 5]

    strictEqual(maxProfit(pricesBtc), 16)
  })

  it('Ejemplo 02', () => {
    const pricesEth = [10, 20, 30, 40, 50, 60, 70]

    strictEqual(maxProfit(pricesEth), 60)
  })

  it('Ejemplo 03', () => {
    const pricesDoge = [18, 15, 12, 11, 9, 7]

    strictEqual(maxProfit(pricesDoge), -1)
  })

  it('Ejemplo 04', () => {
    const pricesAda = [3, 3, 3, 3, 3]

    strictEqual(maxProfit(pricesAda), -1)
  })
})
