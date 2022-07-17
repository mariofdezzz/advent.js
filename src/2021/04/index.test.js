import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import createXmasTree from './index.js'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    strictEqual(
      createXmasTree(3),
      `__*__
_***_
*****
__#__
__#__`
    )
  })

  it('Ejemplo 02', () => {
    strictEqual(
      createXmasTree(5),
      `____*____
___***___
__*****__
_*******_
*********
____#____
____#____`
    )
  })
})
