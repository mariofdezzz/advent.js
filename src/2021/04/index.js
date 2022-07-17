export default function createXmasTree(height) {
  const top = treeTop(height - 1, 1).slice(0, -1)
  const bottom = treeBottom(height - 1)

  return top + bottom
}

function treeTop(underscores, asteriscs) {
  if (underscores < 0) return ''

  const line =
    '_'.repeat(underscores) + '*'.repeat(asteriscs) + '_'.repeat(underscores)

  return line + '\n' + treeTop(underscores - 1, asteriscs + 2)
}

function treeBottom(wide) {
  return ('\n' + '_'.repeat(wide) + '#' + '_'.repeat(wide)).repeat(2)
}
