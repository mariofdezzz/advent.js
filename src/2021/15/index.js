export default function checkSledJump(heights) {
  const inflectionIdx = heights.slice(1).findIndex((h, idx) => h < heights[idx])

  if (inflectionIdx === undefined) return false

  return (
    heights.slice(1, inflectionIdx).every((h, idx) => h > heights[idx]) &&
    heights
      .slice(inflectionIdx + 1, heights.length)
      .every((h, idx) => h < heights[idx + inflectionIdx])
  )
}
