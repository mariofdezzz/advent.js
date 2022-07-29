import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import shouldBuyFidelity from './index.mjs'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    strictEqual(shouldBuyFidelity(1), false)
  })

  it('Ejemplo 02', () => {
    strictEqual(shouldBuyFidelity(100), true)
  })
})
