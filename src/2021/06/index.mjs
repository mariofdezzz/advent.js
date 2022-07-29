export default function sumPairs(numbers, result) {
  while (numbers.length > 0) {
    const number = numbers[0]
    numbers.shift()

    const pair = numbers.find(
      (value) => value + number === result
    )

    if (pair) return [number, pair]
  }

  return null
}
