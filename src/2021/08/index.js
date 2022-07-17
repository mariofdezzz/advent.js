export default function maxProfit(prices) {
  let res = 0

  while (prices.length > 0) {
    let price = prices[0]
    prices.shift()

    const max = prices.reduce(
      (maxValue, value) => Math.max(maxValue, value - price),
      -1
    )

    res = Math.max(res, max)
  }

  return res > 0 ? res : -1
}
