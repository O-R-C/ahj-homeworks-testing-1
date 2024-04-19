import CreditCardValidatorUI from './CreditCardValidatorUI'
import { getSystem } from './getSystems'
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
    this.#form = this.#app.querySelector('[class*="formValidate"]')
    this.#resultSection = this.#app.querySelector('[class*="result"]')
    this.#cards = [...this.#app.querySelector('[class*="cards"]').children]
    this.#inputCardNumber = this.#app.querySelector('[name="cardNumber"]')
  }

  /**
   * Назначаем прослушку событий
   */
  #addListeners() {
    this.#inputCardNumber.addEventListener('input', this.#onInput)
    this.#form.addEventListener('submit', this.#onSubmit)
    this.#form.addEventListener('reset', this.#onReset)
  }

  /**
   * Обработчик события input
   */
  #onInput = () => {
    this.#inputCardNumber.verified && this.#clearResult()

    const value = this.#inputCardNumber.value
    const system = getSystem(value)
    this.#inputCardNumber.value = clearNumber(value)
    this.#renderResult()
    this.#showSystem(system)
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

  #showSystem(system) {
    this.#cards.forEach((card) => this.#ui.showSystem(card))

    system && this.#blurSystems(system)
  }

  #blurSystems(system) {
    const blurCards = this.#cards.filter((card) => !card.classList.contains(system))
    blurCards.forEach((card) => this.#ui.blurSystems(card))
  }

  #clearResult() {
    this.#inputCardNumber.verified = false
    this.#ui.resetResultValidation(this.#resultSection)
  }

  #onReset = (evt) => {
    evt.preventDefault()
    this.#inputCardNumber.value = ''
    this.#renderResult()
  }
}
