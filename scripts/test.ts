import Stats from './readme/stats'
import StdIn from './readme/stdin'

async function test() {
  const stdin = await new StdIn().read()

  const stats = new Stats(
    stdin.substring(stdin.indexOf('TAP version'))
  )

  const {
    total,
    pass,
    fail,
    cancelled,
    skipped,
    todo,
    duration,
  } = stats.getResume()

  if (fail > 0) console.error(stdin)

  console.log('Total:', total)
  console.log('Pass:', pass)
  console.log('Fail:', fail)
  console.log('Cancelled:', cancelled)
  console.log('Skipped:', skipped)
  console.log('Todo:', todo)
  console.log('Duration:', `${duration} ms`)
}
test()
