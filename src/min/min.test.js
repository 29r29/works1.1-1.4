// @ts-nocheck
const minimal = require('./min')
describe('tests #1', () => {
   test('test one', () => {
     expect(minimal(29, 13, -81)).toBe(13)
   })
   test('test two', () => {
    expect(minimal(2, 0.1, 0)).toBe(0)
  })
  test('test three', () => {
    expect(minimal(0, 0, 0)).toBe(0)
  })
  test('test four', () => {
    expect(minimal(29.0000000000001, 0.25**3, Math.sqrt(2))).toBe(0.25**3)
  })
})