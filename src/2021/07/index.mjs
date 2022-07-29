export default function contains(store, product) {
  let res = false

  for (const value of Object.values(store)) {
    if (typeof value === 'object')
      res = res || contains(value, product)
    else if (value === product) return true
  }

  return res
}
