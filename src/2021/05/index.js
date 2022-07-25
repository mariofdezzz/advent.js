const MS_PER_DAY = 1000 * 60 * 60 * 24
const xmasDate = Date.UTC(2021, 11, 25)

export default function daysToXmas(date) {
  const utcDate = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  )
  const diff = xmasDate - utcDate

  return Math.floor(diff / MS_PER_DAY)
}
