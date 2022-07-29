import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import checkIsSameTree from './index.mjs'

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
}

const tree2 = {
  value: 1,
  left: {
    value: 3,
    left: { value: 2, left: null, right: null },
    right: null,
  },
  right: {
    value: 5,
    left: null,
    right: { value: 4, left: null, right: null },
  },
}

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    strictEqual(checkIsSameTree(tree, tree), true)
  })

  it('Ejemplo 02', () => {
    strictEqual(checkIsSameTree(tree, tree2), false)
  })

  it('Ejemplo 03', () => {
    strictEqual(checkIsSameTree(tree2, tree2), true)
  })
})
