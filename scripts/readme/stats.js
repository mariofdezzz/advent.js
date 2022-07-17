export default class Stats {
  constructor(tapInput) {
    this._tapInput = tapInput.split('\n')
  }

  getGlobal() {
    const lastItem = this._tapInput.length
    const globals = this._tapInput.slice(lastItem - 7, lastItem)

    return {
      total: globals[0].match(/\d+/)[0],
      pass: globals[1].match(/\d+/)[0],
      fail: globals[2].match(/\d+/)[0],
      cancelled: globals[3].match(/\d+/)[0],
      skipped: globals[4].match(/\d+/)[0],
      todo: globals[5].match(/\d+/)[0],
      duration: globals[6].match(/\d+(\.\d+)?/)[0],
    }
  }
}
