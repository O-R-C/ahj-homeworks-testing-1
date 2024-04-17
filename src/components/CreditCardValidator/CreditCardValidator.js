import CreditCardValidatorUI from './CreditCardValidatorUI'

export default class CreditCardValidator {
  #element
  #cards = ['Visa', 'MasterCard', 'DinersClub', 'AmericanExpress', 'Discover', 'Mir']
  #ui = new CreditCardValidatorUI(this.#cards)

  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }

    this.#element = element

    this.init()
  }

  init() {
    this.#element.append(this.#ui.app)
  }
}
