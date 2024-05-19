// @ts-nocheck
const countOfPositives = require('./count')
describe('tests #3', () => {
    test('test one', () => {
        const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        expect(countOfPositives(10))
    })
    test('test two', () => {
        const array = [0.3333333333333, Math.sqrt(3), -29, 2201]
        expect(countOfPositives(3))
    })
    test('test three', () => {
        const array = [-20, 0, -0.25, -5]
        expect(countOfPositives(0))
    })
})