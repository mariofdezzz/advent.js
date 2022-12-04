export function wrapping(gifts: string[]) {
  return gifts.map((gift) => {
    const cover = '*'.repeat(gift.length + 2)

    return cover + `\n*${gift}*\n` + cover
  })
}
