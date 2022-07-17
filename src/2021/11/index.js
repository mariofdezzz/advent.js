const ticket = 12
const fidelityBase = 250
const disccount = 0.75

// base + (x * y) + (x * y^2) + ... + (x * y^n)
// base + x * (y + y^2 + ... + y^n)
// base + x * (( (1 - y^(n + 1)) / (1 - y) ) - 1)
export default function shouldBuyFidelity(times) {
  const normal = ticket * times
  const fidelity = fidelityBase + ticket * powSum(times)

  return fidelity < normal
}

function powSum(times) {
  return (1 - Math.pow(disccount, times + 1)) / (1 - disccount) - 1
}

// === Simple version ===
// export default function shouldBuyFidelity(times) {
//   const normal = ticket * times

//   // base + x * (y^1 + y^2 + ... + y^n)
//   const fidelity = fidelityBase + ticket * powSum(times)

//   return fidelity < normal
// }

// function powSum(times) {
//   return times > 0 ? Math.pow(disccount, times) + powSum(times - 1) : 0
// }
