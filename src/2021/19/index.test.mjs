import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import learn from './index.mjs'

describe('2021/01', () => {
  it('Ejemplo 01', () => {
    // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.
    deepStrictEqual(learn(10, [2, 3, 8, 1, 4]), [0, 2])
  })

  it('Ejemplo 02', () => {
    // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.
    deepStrictEqual(learn(15, [2, 10, 4, 1]), [1, 2])
  })

  it('Ejemplo 03', () => {
    // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos
    deepStrictEqual(learn(25, [10, 15, 20, 5]), [0, 1])
  })

  it('Ejemplo 04', () => {
    // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.
    deepStrictEqual(learn(8, [8, 2, 1]), [1, 2])
  })

  it('Ejemplo 05', () => {
    // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.
    deepStrictEqual(learn(8, [8, 2, 1, 4, 3]), [3, 4])
  })

  it('Ejemplo 06', () => {
    // null -> no nos da tiempo a hacer dos cursos
    deepStrictEqual(learn(4, [10, 14, 20]), null)
  })

  it('Ejemplo 07', () => {
    // null -> no nos da tiempo a hacer dos cursos
    deepStrictEqual(learn(5, [5, 5, 5]), null)
  })
})
