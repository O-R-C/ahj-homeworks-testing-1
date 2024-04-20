import CreditCardValidator from '../../components/CreditCardValidator/CreditCardValidator'

const body = document.body
const validator = new CreditCardValidator(body)
validator.init()

const app = body.querySelector('[class*="app"]')
const inputCardNumber = app.querySelector('[name="cardNumber"]')
const btnValidate = app.querySelector('[class*="btnValidate"]')

test('app should render', () => {
  expect(app).toBeTruthy()
})

test('resultSection should add .valid class if number is valid', () => {
  inputCardNumber.value = '2217560190848067'
  btnValidate.click()

  const resultValid = app.querySelector('[class*="valid"]')

  expect(resultValid).toBeTruthy()
})

test('resultSection should add .invalid class if number is invalid', () => {
  inputCardNumber.value = '2217560190848064'
  btnValidate.click()

  const resultInvalid = app.querySelector('[class*="invalid"]')

  expect(resultInvalid).toBeTruthy()
})
