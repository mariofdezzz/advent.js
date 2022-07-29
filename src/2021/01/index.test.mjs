import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import contarOvejas from './index.mjs'

describe('2021/01', () => {
  it('Ejemplo', () => {
    const ovejas = [
      { name: 'Noa', color: 'azul' },
      { name: 'Euge', color: 'rojo' },
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' },
      { name: 'AAAAAaaaaa', color: 'rojo' },
      { name: 'Nnnnnnnn', color: 'rojo' },
    ]

    const ovejasFiltradas = contarOvejas(ovejas)

    deepStrictEqual(ovejasFiltradas, [
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' },
    ])
  })
})
