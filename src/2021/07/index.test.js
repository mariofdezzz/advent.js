import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import contains from './index.js'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    const almacen = {
      estanteria1: {
        cajon1: {
          producto1: 'coca-cola',
          producto2: 'fanta',
          producto3: 'sprite',
        },
      },
      estanteria2: {
        cajon1: 'vacio',
        cajon2: {
          producto1: 'pantalones',
          producto2: 'camiseta', // <- ¡Está aquí!
        },
      },
    }

    strictEqual(contains(almacen, 'camiseta'), true)
  })

  it('Ejemplo 02', () => {
    const almacen = {
      baul: {
        fondo: {
          objeto: 'cd-rom',
          'otro-objeto': 'disquette',
          'otra-cosa': 'mando',
        },
      },
    }

    strictEqual(contains(almacen, 'gameboy'), false)
  })
})
