import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import groupBy from './index.js'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    deepStrictEqual(groupBy([6.1, 4.2, 6.3], Math.floor), {
      6: [6.1, 6.3],
      4: [4.2],
    })
  })

  it('Ejemplo 02', () => {
    deepStrictEqual(groupBy(['one', 'two', 'three'], 'length'), {
      3: ['one', 'two'],
      5: ['three'],
    })
  })

  it('Ejemplo 03', () => {
    deepStrictEqual(groupBy([{ age: 23 }, { age: 24 }], 'age'), {
      23: [{ age: 23 }],
      24: [{ age: 24 }],
    })
  })

  it('Ejemplo 04', () => {
    deepStrictEqual(
      groupBy(
        [
          { title: 'JavaScript: The Good Parts', rating: 8 },
          { title: 'Aprendiendo Git', rating: 10 },
          { title: 'Clean Code', rating: 9 },
        ],
        'rating'
      ),
      {
        8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
        9: [{ title: 'Clean Code', rating: 9 }],
        10: [{ title: 'Aprendiendo Git', rating: 10 }],
      }
    )
  })
})
