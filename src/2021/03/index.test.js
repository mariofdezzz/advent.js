import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import isValid from './index.js'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    const letter = 'bici coche (balón) bici coche peluche'

    strictEqual(isValid(letter), true)
  })

  it('Ejemplo 02', () => {
    const letter = '(muñeca) consola bici'

    strictEqual(isValid(letter), true)
  })

  it('Ejemplo 03', () => {
    const letter = 'bici coche (balón bici coche'

    strictEqual(isValid(letter), false)
  })

  it('Ejemplo 04', () => {
    const letter = 'peluche (bici [coche) bici coche balón'

    strictEqual(isValid(letter), false)
  })

  it('Ejemplo 05', () => {
    const letter = '(peluche {) bici'

    strictEqual(isValid(letter), false)
  })

  it('Ejemplo 06', () => {
    const letter = '() bici'

    strictEqual(isValid(letter), false)
  })
})
