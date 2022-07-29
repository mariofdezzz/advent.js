export default function wrapGifts(gifts) {
  return gifts.length > 0
    ? [
        '*'.repeat(gifts[0].length + 2),
        ...gifts.map((gift) => `*${gift}*`),
        '*'.repeat(gifts[0].length + 2),
      ]
    : []
}
