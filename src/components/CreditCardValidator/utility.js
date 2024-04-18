export const checkNumber = (number) => {
  const length = number.length

  if (length < 12 || length > 19) return false

  const numbers = [...number].reverse()
  const result = numbers.reduce((acc, number, index) => {
    if (!(index % 2)) return acc + Number(number)

    const double = number * 2
    const result = double > 9 ? double - 9 : double

    return acc + result
  }, 0)
  return result % 10 ? false : true
}

export const getTitle = (number) => {
  !number && (number = 'XXXXXXXXXXXXXXXX')

  return [...number].reduce((acc, char, index) => {
    if (!index || index % 4) return acc + char
    return acc + ' - ' + char
  }, '')
}

export const clearNumber = (number) => {
  return number.replace(/\D/g, '')
}
