import { equal } from 'node:assert'
import { describe, it } from 'node:test'
import canReconfigure from './index.mjs'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    const from = 'BAL'
    const to = 'LIB'
    /* la transformación sería así:
    B -> L
    A -> I
    L -> B
    */

    equal(canReconfigure(from, to), true)
  })

  it('Ejemplo 02', () => {
    const from = 'CON'
    const to = 'JUU'
    /* no se puede hacer la transformación:
    C -> J
    O -> U
    N -> FALLO
    */

    equal(canReconfigure(from, to), false)
  })

  it('Ejemplo 03', () => {
    const from = 'XBOX'
    const to = 'XXBO'
    /* no se puede hacer la transformación:
    X -> X
    B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
    O -> B
    X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
    */

    equal(canReconfigure(from, to), false)
  })

  it('Ejemplo 04', () => {
    const from = 'XBOX'
    const to = 'XOBX'

    equal(canReconfigure(from, to), true)
  })

  it('Ejemplo 05', () => {
    const from = 'MMM'
    const to = 'MID'
    /* no se puede hacer la transformación:
    M -> M (BIEN, asigna el mismo carácter a si mismo)
    M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
    M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
    */

    equal(canReconfigure(from, to), false)
  })

  it('Ejemplo 06', () => {
    const from = 'AA'
    const to = 'MID'

    equal(canReconfigure(from, to), false)
  })
})
