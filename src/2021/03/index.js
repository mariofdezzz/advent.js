export default function isValid(letter) {
  return letter
    .split(' ')
    .every((word) => /^((\w+)|(\([a-zÀ-ÿ]+\)))$/.test(word))
}
