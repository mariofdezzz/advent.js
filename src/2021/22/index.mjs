export default function countDecorations(tree) {
  if (tree === null) return 0

  return (
    tree.value +
    countDecorations(tree.left) +
    countDecorations(tree.right)
  )
}
