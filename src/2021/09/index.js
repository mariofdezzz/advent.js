export default function groupBy(collection, it) {
  const getKey =
    typeof it === 'function'
      ? (el) => it(el)
      : (el) => el[it]

  return collection.reduce((obj, el) => {
    const res = getKey(el)

    if (Object.hasOwn(obj, res)) obj[res].push(el)
    else obj[res] = [el]

    return obj
  }, {})
}
