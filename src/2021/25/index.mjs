const mouse = 'm'
const food = '*'

export default function canMouseEat(direction, game) {
  const mouse = findMouse(game)

  if (mouse === undefined) return false
  const [row, col] = mouse

  switch (direction) {
    case 'up':
      return row > 0 ? game[row - 1][col] === food : false

    case 'down':
      return row < game.length - 1
        ? game[row + 1][col] === food
        : false

    case 'left':
      return col > 0 ? game[row][col - 1] === food : false

    case 'right':
      return col < game[0].length - 1
        ? game[row][col + 1] === food
        : false

    default:
      return false
  }
}

function findMouse(game) {
  for (const [i, row] of game.entries()) {
    for (const [j, value] of row.entries()) {
      if (value === mouse) return [i, j]
    }
  }
  return undefined
}
