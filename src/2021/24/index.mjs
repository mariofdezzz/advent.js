export default function checkIsSameTree(a, b) {
  if (a === null || b === null)
    return a === null && b === null

  return (
    a.value === b.value &&
    checkIsSameTree(a.left, b.left) &&
    checkIsSameTree(a.right, b.right)
  )
}
