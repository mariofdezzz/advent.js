import { createInterface } from 'readline'

export default class StdIn {
  _buffer = []

  read() {
    const readline = createInterface({
      input: process.stdin,
    })

    readline.on('line', (line) => {
      this._buffer.push(line)
    })

    return new Promise((resolve) => {
      readline.on('close', () => {
        resolve(this._buffer.join('\n'))
      })
    })
  }
}
