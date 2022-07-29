export default class Stats {
  constructor(tapInput) {
    this._tapInput = tapInput.split('\n')
  }

  getTests() {
    return this._tapInput
      .filter(
        (line) =>
          line.startsWith('ok') ||
          line.startsWith('  duration_ms')
      )
      .reduce((acc, val, idx, arr) => {
        const day = val.match(/(?<=^ok.+\/)\d{2}(?=\/)/)

        if (day) {
          acc[+day[0]] = {
            passed: true,
            duration: this._getResult(arr[idx + 1]),
          }
        }

        return acc
      }, {})
  }

  getGlobal() {
    const lastItem = this._tapInput.length
    const globals = this._tapInput.slice(
      lastItem - 7,
      lastItem
    )

    return {
      total: this._getResult(globals[0]),
      pass: this._getResult(globals[1]),
      fail: this._getResult(globals[2]),
      cancelled: this._getResult(globals[3]),
      skipped: this._getResult(globals[4]),
      todo: this._getResult(globals[5]),
      duration: this._getResult(globals[6]),
    }
  }

  _getResult(line) {
    return parseFloat(line.match(/\d+(\.\d+)?/)[0])
  }
}
