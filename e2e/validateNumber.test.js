import puppeteer from 'puppeteer'

jest.setTimeout(600000)

describe('test', () => {
  let browser
  let page

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    })

    page = await browser.newPage()
  })

  // eslint-disable-next-line jest/expect-expect
  test('app should render on page', async () => {
    await page.goto('http://localhost:8080')

    await page.waitForSelector('[class*="app"]')
  })

  // eslint-disable-next-line jest/expect-expect
  test('resultSection should add .valid class if number is valid', async () => {
    await page.goto('http://localhost:8080')

    await page.waitForSelector('[class*="app"]')

    const app = await page.$('[class*="app"]')
    const inputCardNumber = await app.$('[name="cardNumber"]')
    const btnValidate = await app.$('[class*="btnValidate"]')

    await inputCardNumber.type('2217560190848067')
    await btnValidate.click()

    await page.waitForSelector('[class*="app"] [class*="valid"]')
  })

  // eslint-disable-next-line jest/expect-expect
  test('resultSection should add .invalid class if number is invalid', async () => {
    await page.goto('http://localhost:8080')

    await page.waitForSelector('[class*="app"]')

    const app = await page.$('[class*="app"]')
    const inputCardNumber = await app.$('[name="cardNumber"]')
    const btnValidate = await app.$('[class*="btnValidate"]')

    await inputCardNumber.type('2217560190848066')
    await btnValidate.click()

    await page.waitForSelector('[class*="app"] [class*="valid"]')
  })

  afterEach(async () => {
    await browser.close()
  })
})
