import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import canCarry from './index.js'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    strictEqual(
      canCarry(4, [
        [2, 5, 8],
        [3, 6, 10],
      ]),
      false
    )
  })

  it('Ejemplo 02', () => {
    strictEqual(
      canCarry(3, [
        [1, 1, 5],
        [2, 2, 10],
      ]),
      true
    )
  })

  it('Ejemplo 03', () => {
    strictEqual(
      canCarry(3, [
        [2, 1, 5],
        [3, 5, 7],
      ]),
      true
    )
  })

  it('Ejemplo 04', () => {
    strictEqual(
      canCarry(4, [
        [2, 3, 8],
        [2, 5, 7],
      ]),
      true
    )
  })

  it('Ejemplo 05', () => {
    strictEqual(canCarry(1, [[2, 3, 8]]), false)
  })

  it('Ejemplo 06', () => {
    strictEqual(
      canCarry(2, [
        [1, 2, 4],
        [2, 3, 8],
      ]),
      false
    )
  })
})
