/**
 *
 * @param {String} number номер карты
 * @returns {String} название платежной системы
 */
export const getSystem = (number) => {
  if (isDinersClub(number)) return 'DinersClub'
  if (isMasterCard(number)) return 'MasterCard'
  if (isDiscover(number)) return 'Discover'
  if (isAmericanExpress(number)) return 'AmericanExpress'
  if (isVisa(number)) return 'Visa'
  if (isMir(number)) return 'Mir'
}

const startsWithAny = (str, words) => words.some((word) => str.startsWith(word))

const inRange = (number, min, max) => number >= min && number <= max

const isMir = (number) => number.startsWith('22')

const isVisa = (number) => number.startsWith('4')

const isAmericanExpress = (number) => startsWithAny(number, ['34', '37'])

const isDinersClub = (number) =>
  startsWithAny(number, ['54', '36']) || inRange(number.slice(0, 3), 300, 305)

const isDiscover = (number) =>
  startsWithAny(number, ['6011', '65']) ||
  inRange(number.slice(0, 3), 644, 649) ||
  inRange(number.slice(0, 6), 622126, 622925)

const isMasterCard = (number) =>
  inRange(number.slice(0, 2), 51, 55) || inRange(number.slice(0, 6), 222100, 272099)
