import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import canMouseEat from './index.mjs'

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
]

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*'],
]

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    strictEqual(canMouseEat('up', room), false)
  })

  it('Ejemplo 02', () => {
    strictEqual(canMouseEat('down', room), true)
  })

  it('Ejemplo 03', () => {
    strictEqual(canMouseEat('right', room), false)
  })

  it('Ejemplo 04', () => {
    strictEqual(canMouseEat('left', room), false)
  })

  it('Ejemplo 05', () => {
    strictEqual(canMouseEat('up', room2), false)
  })

  it('Ejemplo 06', () => {
    strictEqual(canMouseEat('down', room2), false)
  })

  it('Ejemplo 07', () => {
    strictEqual(canMouseEat('right', room2), true)
  })

  it('Ejemplo 08', () => {
    strictEqual(canMouseEat('left', room2), false)
  })
})
