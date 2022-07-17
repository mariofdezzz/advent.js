export default function listGifts(letter) {
  const list = letter
    .split(' ')
    .filter((gift) => gift !== '')
    .filter((gift) => !/^_/.test(gift))

  return list.reduce((map, gift) => {
    if (Object.hasOwn(map, gift)) map[gift] += 1
    else map[gift] = 1

    return map
  }, {})
}
