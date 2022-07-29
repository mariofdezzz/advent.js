import { createInterface } from 'readline'

export default class StdIn {
  private buffer: string[] = []

  read(): Promise<string> {
    const readline = createInterface({
      input: process.stdin,
    })

    readline.on('line', (line) => {
      this.buffer.push(line)
    })

    return new Promise((resolve) => {
      readline.on('close', () => {
        resolve(this.buffer.join('\n'))
      })
    })
  }
}
