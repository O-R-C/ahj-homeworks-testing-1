import { getSystem } from '../../components/CreditCardValidator/getSystems'

describe('getSystem', () => {
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
    test.each(data)('%p %p', (number, value) => {
      const result = getSystem(number)
      expect(result).toBe(value)
    })
  })
})
