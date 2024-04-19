import {
  checkNumber,
  clearNumber,
  getTitle,
} from '../../components/CreditCardValidator/utility'

describe('checkNumber', () => {
  const data = [
    ['4916399733481841', 'Visa'],
    ['4024007106188617', 'Visa'],
    ['4485467578498054857', 'Visa'],
    ['6011928707291429', 'Discover'],
    ['6011134600398789', 'Discover'],
    ['6011108971970344234', 'Discover'],
    ['36816188204470', 'DinersClub'],
    ['30257457665016', 'DinersClub'],
    ['5477932363944882', 'DinersClub'],
    ['373117940742126', 'AmericanExpress'],
    ['370471349548714', 'AmericanExpress'],
    ['346601314133354', 'AmericanExpress'],
    ['5157180630872273', 'MasterCard'],
    ['2720994188447949', 'MasterCard'],
    ['5587901419909386', 'MasterCard'],
    ['2217560190848067', 'Mir'],
  ]

  describe('valid number', () => {
    test.each(data)('%p', (number) => {
      const result = checkNumber(number)
      expect(result).toBeTruthy()
    })
  })

  describe('invalid number', () => {
    const dataInvalid = ['1', '12345678901', '12345678909876543212', ...data]

    test.each(dataInvalid)('%p', (number) => {
      const result = checkNumber(String(number - 1))
      expect(result).toBeFalsy()
    })
  })
})

describe('clearNumber', () => {
  const data = [
    ['49 163997sd3348ds --1841', '4916399733481841'],
    ['4024asd00710dssdd6188617', '4024007106188617'],
    ['4485467QWDXZ__578498054857', '4485467578498054857'],
    ['60119.,28707291429', '6011928707291429'],
    ['6011134600398789', '6011134600398789'],
    ['6-0-1-1-1-0-8-9--7-1-9-7-0-3-4-4-2-3-4', '6011108971970344234'],
  ]

  test.each(data)('%p %p', (number, value) => {
    const result = clearNumber(number)
    expect(result).toBe(value)
  })
})

describe('getTitle', () => {
  const data = [
    ['4916399733481841', '4916 - 3997 - 3348 - 1841'],
    ['491639973348', '4916 - 3997 - 3348'],
    ['4916', '4916'],
  ]

  test.each(data)('%p %p', (number, title) => {
    const result = getTitle(number)
    expect(result).toBe(title)
  })
})
