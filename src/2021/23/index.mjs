export default function canReconfigure(from, to) {
  if (from.length !== to.length) return false

  const hasSameUniqueLetters =
    new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const memo = {}

  for (let i = 0; i < from.length; i++) {
    const f = from[i]
    const t = to[i]

    if (f in memo && memo[f] !== t) return false

    memo[f] = t
  }

  return true
}
