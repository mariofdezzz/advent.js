// Time complexity: O(n^2)
// TODO: Reduce time complexity to O(n*log n) using binary search
export default function learn(time, courses) {
  let res = []
  let resSum = -1

  for (let i = 0; i < courses.length - 1; i++)
    for (let j = i + 1; j < courses.length; j++) {
      const a = courses[i]
      const b = courses[j]
      const sum = a + b

      if (sum > resSum && sum <= time) {
        res = [i, j]
        resSum = sum
      }
    }

  return res.length > 0 ? res : null
}
