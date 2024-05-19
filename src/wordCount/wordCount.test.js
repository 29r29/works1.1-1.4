//@ts-nocheck 
const countOfWordsBeginsWithK = require('./wordCount')
describe('tests #4', () => {
    test('test one', () => {
        expect(countOfWordsBeginsWithK('Капибара, кошка, криль, змея')).toBe(3)
    })
    test('test one', () => {
        expect(countOfWordsBeginsWithK('Чайник, утюг, духовка, плита, телефон, ноутбук')).toBe(0)
    })
    test('test one', () => {
        expect(countOfWordsBeginsWithK('Комсомольск-на-амуре, Хабаровск, Архангельск, Кострома, Екатеринбург, Калининград, Кемерово')).toBe(4)
    })
})