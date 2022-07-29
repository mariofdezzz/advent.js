const ES_LETTERS = 27
const compare = new Intl.Collator('es', {
  sensitivity: 'base',
}).compare

export default function pangram(sentence) {
  return (
    sentence
      .split('')
      .filter((val) => /[a-zñáéíóúü]/i.test(val))
      .filter(
        (val, idx, arr) =>
          arr.findIndex((v) => compare(val, v) === 0) ===
          idx
      ).length === ES_LETTERS
  )
}
