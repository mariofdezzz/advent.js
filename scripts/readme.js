import { createInterface } from 'readline'

const buffer = []

var readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
})

readline.on('line', function (line) {
  if (
    /# tests \d+/.test(line) ||
    /# pass \d+/.test(line) ||
    /# fail \d+/.test(line)
  )
    buffer.push('🎉 ' + line.match(/\w+ \d+/i)[0])
  // console.log('🎉 ' + line.match(/\w+ \d+/i)[0])
})

readline.on('close', function () {
  console.log(buffer.join('\n'))
})
