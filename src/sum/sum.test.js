// @ts-nocheck
const sumOfNumbers = require('./sum')
describe('tests #2', () => {
    test('test one', () => {
        expect(sumOfNumbers(0, 290)).toBe(7056)
    })
    test('test two', () => {
        expect(sumOfNumbers(-12, 120)).toBe(1242)
    })
    test('test three', () => {
        expect(sumOfNumbers(0, 2101)).toBe(368550)
    })
})