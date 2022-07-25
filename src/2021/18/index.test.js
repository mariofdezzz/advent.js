import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import fixFiles from './index.js'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    const files = [
      'photo',
      'postcard',
      'photo',
      'photo',
      'video',
    ]
    const result = [
      'photo',
      'postcard',
      'photo(1)',
      'photo(2)',
      'video',
    ]

    deepStrictEqual(fixFiles(files), result)
  })

  it('Ejemplo 02', () => {
    const files = ['file', 'file', 'file', 'game', 'game']
    const result = [
      'file',
      'file(1)',
      'file(2)',
      'game',
      'game(1)',
    ]

    deepStrictEqual(fixFiles(files), result)
  })

  it('Ejemplo 03', () => {
    const files = [
      'file',
      'file(1)',
      'icon',
      'icon(1)',
      'icon(1)',
    ]
    const result = [
      'file',
      'file(1)',
      'icon',
      'icon(1)',
      'icon(1)(1)',
    ]

    deepStrictEqual(fixFiles(files), result)
  })
})
