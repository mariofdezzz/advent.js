import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import decodeNumbers from './index.js'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    strictEqual(decodeNumbers('...'), 3)
  })

  it('Ejemplo 02', () => {
    strictEqual(decodeNumbers('.,'), 4)
  })

  it('Ejemplo 03', () => {
    strictEqual(decodeNumbers(',.'), 6)
  })

  it('Ejemplo 04', () => {
    strictEqual(decodeNumbers(',...'), 8)
  })

  it('Ejemplo 05', () => {
    strictEqual(decodeNumbers('.........!'), 107)
  })

  it('Ejemplo 06', () => {
    strictEqual(decodeNumbers('.;'), 49)
  })

  it('Ejemplo 07', () => {
    strictEqual(decodeNumbers('..,'), 5)
  })

  it('Ejemplo 08', () => {
    strictEqual(decodeNumbers('..,!'), 95)
  })

  it('Ejemplo 09', () => {
    strictEqual(decodeNumbers('.;!'), 49)
  })

  it('Ejemplo 10', () => {
    strictEqual(decodeNumbers('!!!'), 300)
  })

  it('Ejemplo 11', () => {
    strictEqual(decodeNumbers(';!'), 50)
  })

  it('Ejemplo 12', () => {
    strictEqual(decodeNumbers(';.W'), NaN)
  })
})
