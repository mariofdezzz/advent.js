import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import checkSledJump from './index.mjs'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    strictEqual(checkSledJump([1, 2, 3, 2, 1]), true)
  })

  it('Ejemplo 02', () => {
    strictEqual(checkSledJump([0, 1, 0]), true)
  })

  it('Ejemplo 03', () => {
    strictEqual(checkSledJump([0, 3, 2, 1]), true)
  })

  it('Ejemplo 04', () => {
    strictEqual(checkSledJump([0, 1000, 1]), true)
  })

  it('Ejemplo 05', () => {
    strictEqual(checkSledJump([2, 4, 4, 6, 2]), false)
  })

  it('Ejemplo 06', () => {
    strictEqual(checkSledJump([1, 2, 3]), false)
  })

  it('Ejemplo 07', () => {
    strictEqual(checkSledJump([1, 2, 3, 2, 1, 2, 3]), false)
  })
})
