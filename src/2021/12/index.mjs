export default function getMinJump(obstacles) {
  if (obstacles.length === 0) return 0

  const obs = obstacles.sort((a, b) => (b < a ? 1 : -1))

  for (let i = 1; i < obs.at(-1); i++) {
    if (obs.every((obs) => obs % i !== 0)) return i
  }
  return obs.at(-1) + 1
}
