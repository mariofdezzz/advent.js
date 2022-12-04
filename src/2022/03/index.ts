export function distributeGifts(
  packOfGifts: string[],
  reindeers: string[]
) {
  const weight = packOfGifts.reduce(
    (acc, gift) => acc + gift.length,
    0
  )
  const capacity = reindeers.reduce(
    (acc, reindeer) => acc + reindeer.length * 2,
    0
  )
  return Math.floor(capacity / weight)
}
