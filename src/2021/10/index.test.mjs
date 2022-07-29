import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import getCoins from './index.mjs'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    deepStrictEqual(getCoins(51), [1, 0, 0, 0, 0, 1]) // -> una moneda de 1 céntimo y otra de 50
  })

  it('Ejemplo 02', () => {
    deepStrictEqual(getCoins(3), [1, 1, 0, 0, 0, 0]) // -> una moneda de 1 céntimo y otra de 2
  })

  it('Ejemplo 03', () => {
    deepStrictEqual(getCoins(5), [0, 0, 1, 0, 0, 0]) // -> una moneda de 5 céntimos
  })

  it('Ejemplo 04', () => {
    deepStrictEqual(getCoins(16), [1, 0, 1, 1, 0, 0]) // -> una moneda de 1 céntimo, una de 5 y una de 10
  })

  it('Ejemplo 05', () => {
    deepStrictEqual(getCoins(100), [0, 0, 0, 0, 0, 2]) // -> dos monedas de 50 céntimos
  })
})
