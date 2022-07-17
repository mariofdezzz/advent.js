const coins = [1, 2, 5, 10, 20, 50].reverse()

export default function getCoins(cents) {
  return coins
    .map((coin) => {
      if (cents / coin >= 1) {
        const count = Math.floor(cents / coin)

        cents -= coin * count

        return count
      }
      return 0
    })
    .reverse()
}
