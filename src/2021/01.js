export default function contarOvejas(ovejas) {
  return ovejas.filter(
    (oveja) =>
      oveja.color === 'rojo' && /a/i.test(oveja.name) && /n/i.test(oveja.name)
  )
}
