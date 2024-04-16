import CreditCardValidatorUI from './CreditCardValidatorUI'

export default class CreditCardValidator {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }

    this.element = element
    this.init()
  }

  init() {
    this.element.append(CreditCardValidatorUI.app)
  }
}
