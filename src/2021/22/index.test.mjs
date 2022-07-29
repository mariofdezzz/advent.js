import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import countDecorations from './index.mjs'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    const tree = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    }

    /* Gráficamente sería así:
        1
      /   \
     2     3
    
    1 + 2 + 3 = 6
    */

    strictEqual(countDecorations(tree), 6)
  })

  it('Ejemplo 02', () => {
    const tree = {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    }

    /*
            1
          /   \
        5     6
        /     / \
      7     5   1
      /
    3
    */
    strictEqual(countDecorations(tree), 28)
  })
})
