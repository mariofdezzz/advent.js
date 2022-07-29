import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import listGifts from './index.mjs'

describe('2021/01', () => {
  it('Ejemplo', () => {
    const carta =
      'bici coche balón _playstation bici coche peluche'

    const regalos = listGifts(carta)

    deepStrictEqual(regalos, {
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1,
    })
  })
})
