export function countHours(
  year: number,
  holidays: string[]
) {
  return (
    holidays
      .map((day) => new Date(day + '/' + year))
      .filter((date) => date instanceof Date)
      .filter(
        (date) => date.getDay() > 0 && date.getDay() < 6
      ).length * 2
  )
}
