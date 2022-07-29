import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import countPackages from './index.mjs'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    const carriers = [
      ['dapelu', 5, ['midu', 'jelowing']],
      ['midu', 2, []],
      ['jelowing', 2, []],
    ]

    // 5 de dapelu, 2 de midu y 2 de jelowing = 9
    strictEqual(countPackages(carriers, 'dapelu'), 9)
  })

  it('Ejemplo 02', () => {
    const carriers = [
      ['lolivier', 8, ['camila', 'jesuspoleo']],
      ['camila', 5, ['sergiomartinez', 'conchaasensio']],
      ['jesuspoleo', 4, []],
      ['sergiomartinez', 4, []],
      ['conchaasensio', 3, ['facundocapua', 'faviola']],
      ['facundocapua', 2, []],
      ['faviola', 1, []],
    ]

    // 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
    strictEqual(countPackages(carriers, 'camila'), 15)
  })
})
