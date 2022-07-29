/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export default function canCarry(capacity, trip) {
  let giftAmount = 0
  let gifStack = []

  for (const [amount, start, end] of trip) {
    let idx = gifStack.findIndex(({ end }) => end <= start)

    while (idx >= 0) {
      const gift = gifStack.splice(idx, 1)[0]
      giftAmount -= gift.amount

      idx = gifStack.findIndex(({ end }) => end <= start)
    }

    gifStack.push({ amount, end })
    giftAmount += amount

    console.log(gifStack, giftAmount)

    if (giftAmount > capacity) return false
  }

  return true
}
