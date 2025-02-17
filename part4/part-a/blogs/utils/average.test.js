import { test, describe } from 'node:test'
import { strictEqual } from 'node:assert'

import { average } from './testing.js'

describe('average', () => {
  test('of one value is the value itself', () => {
    strictEqual(average([1]), 1)
  })

  test('of many is calculated right', () => {
    strictEqual(average([1, 2, 3, 4, 5, 6]), 3.5)
  })

  test('of empty array is zero', () => {
    strictEqual(average([]), 0)
  })
})