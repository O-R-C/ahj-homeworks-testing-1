import CreditCardValidatorUI from './CreditCardValidatorUI'
import { checkNumber, clearNumber, getTitle } from './utility'

export default class CreditCardValidator {
  #form
  #element
  #resultSection
  #inputCardNumber

  #cards = ['Mir', 'Visa', 'MasterCard', 'DinersClub', 'AmericanExpress', 'Discover']
  #ui = new CreditCardValidatorUI(this.#cards)
  #app = this.#ui.app

  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }

    this.#element = element
  }

  init() {
    this.#element.append(this.#app)
    this.#addElements()
    this.#addListeners()
    this.#renderResult()
  }

  /**
   * Ищем и добавляем элементы
   */
  #addElements() {
    this.#inputCardNumber = this.#app.querySelector('input')
    this.#form = this.#app.querySelector('[class*="formValidate"]')
    this.#resultSection = this.#app.querySelector('[class*="result"]')
  }

  /**
   * Назначаем прослушку событий
   */
  #addListeners() {
    this.#inputCardNumber.addEventListener('input', this.#onInput)
    this.#form.addEventListener('submit', this.#onSubmit)
  }

  /**
   * Обработчик события input
   */
  #onInput = () => {
    this.#inputCardNumber.verified && this.#clearResult()

    this.#inputCardNumber.value = clearNumber(this.#inputCardNumber.value)
    this.#renderResult()
  }

  /**
   * Обработчик события submit
   * @param {Event} evt
   */
  #onSubmit = (evt) => {
    evt.preventDefault()
    this.#inputCardNumber.verified = true
    const result = checkNumber(this.#inputCardNumber.value)
    this.#ui.showResultValidation(this.#resultSection, result)
  }

  #renderResult() {
    this.#resultSection.textContent = getTitle(this.#inputCardNumber.value)
  }

  #clearResult() {
    this.#inputCardNumber.verified = false
    this.#ui.resetResultValidation(this.#resultSection)
  }
}
