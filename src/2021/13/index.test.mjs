import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import wrapGifts from './index.mjs'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    deepStrictEqual(wrapGifts(['📷', '⚽️']), [
      '****',
      '*📷*',
      '*⚽️*',
      '****',
    ])
  })

  it('Ejemplo 02', () => {
    deepStrictEqual(wrapGifts(['🏈🎸', '🎮🧸']), [
      '******',
      '*🏈🎸*',
      '*🎮🧸*',
      '******',
    ])
  })

  it('Ejemplo 03', () => {
    deepStrictEqual(wrapGifts(['📷']), [
      '****',
      '*📷*',
      '****',
    ])
  })
})
