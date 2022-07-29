export interface Test {
  year: string
  day: string
  pass: boolean
  duration: number
}

export interface Resume {
  total: number
  pass: number
  fail: number
  cancelled: number
  skipped: number
  todo: number
  duration: number
}
