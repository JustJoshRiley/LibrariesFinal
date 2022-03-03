const funct = require('../index')

test('Phone Number', () => {
    expect(funct.getPhone("2817867986")).toBe('(281) 786-7986')
})

test('Phone Number less than 10 digits', () => {
    expect(funct.getPhone("281786798")).toBe('Not Enough Digits')
})

test('Phone Number greater than 10 digits', () => {
    expect(funct.getPhone("28178679866")).toBe('Too Many Digits')
})

test('Phone Number is number', () => {
    expect(funct.getPhone(28178679866)).toBe(undefined)
})

test('Phone Number empty', () => {
    expect(funct.getPhone("")).toBe('Not Enough Digits')
})