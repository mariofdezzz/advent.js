import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import missingReindeer from './index.js'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    strictEqual(missingReindeer([0, 2, 3]), 1)
  })

  it('Ejemplo 02', () => {
    strictEqual(missingReindeer([5, 6, 1, 2, 3, 7, 0]), 4)
  })

  it('Ejemplo 03', () => {
    strictEqual(missingReindeer([0, 1]), 2)
  })

  it('Ejemplo 04', () => {
    strictEqual(missingReindeer([3, 0, 1]), 2)
  })

  it('Ejemplo 05', () => {
    strictEqual(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]), 8)
  })

  it('Ejemplo 06', () => {
    strictEqual(missingReindeer([0]), 1)
  })
})
