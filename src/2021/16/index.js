const map = {
  '.': 1,
  ',': 5,
  ':': 10,
  ';': 50,
  '!': 100,
}

export default function decodeNumbers(symbols) {
  return symbols.split('').reduce((acc, val, idx, arr) => {
    if (!Object.hasOwn(map, val)) return NaN

    return idx < arr.length - 1 &&
      map[val] < map[arr[idx + 1]]
      ? acc - map[val]
      : acc + map[val]
  }, 0)
}
