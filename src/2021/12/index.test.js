import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import getMinJump from './index.js'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    strictEqual(getMinJump([5, 3, 6, 7, 9]), 4)
  })

  it('Ejemplo 02', () => {
    strictEqual(getMinJump([2, 4, 6, 8, 10]), 7)
  })

  it('Ejemplo 03', () => {
    strictEqual(getMinJump([1, 2, 3, 5]), 4)
  })

  it('Ejemplo 04', () => {
    strictEqual(getMinJump([3, 7, 5]), 2)
  })

  it('Ejemplo 05', () => {
    strictEqual(getMinJump([9, 5, 1]), 2)
  })
})
