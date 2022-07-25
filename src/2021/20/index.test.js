import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import pangram from './index.js'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    strictEqual(
      pangram(
        'Extraño pan de col y kiwi se quemó bajo fugaz vaho'
      ),
      true
    )
  })

  it('Ejemplo 02', () => {
    strictEqual(
      pangram(
        'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'
      ),
      true
    )
  })

  it('Ejemplo 03', () => {
    strictEqual(
      pangram(
        'Esto es una frase larga pero no tiene todas las letras del abecedario'
      ),
      false
    )
  })

  it('Ejemplo 04', () => {
    strictEqual(
      pangram('De la a a la z, nos faltan letras'),
      false
    )
  })
})
