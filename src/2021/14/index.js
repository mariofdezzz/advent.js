// TODO: Improve time execution below O(n)

export default function missingReindeer(ids) {
  return (
    (ids
      .sort((a, b) => a - b)
      .find((v, idx) => v !== idx) ?? ids.length + 1) - 1
  )
}
