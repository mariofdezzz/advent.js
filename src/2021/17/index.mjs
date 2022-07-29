export default function countPackages(carriers, carrierID) {
  const map = hashCarriers(carriers)

  function _countPackages(carrierID) {
    const carrier = map[carrierID]

    return (
      carrier.packages +
      carrier.subordinates.reduce(
        (acc, val) => acc + _countPackages(val),
        0
      )
    )
  }

  return _countPackages(carrierID)
}

function hashCarriers(carriers) {
  const res = {}

  carriers.forEach(([id, packages, subordinates]) => {
    res[id] = {
      packages,
      subordinates,
    }
  })

  return res
}
