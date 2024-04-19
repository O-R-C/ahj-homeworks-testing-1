import Div from '../ui/Div/Div'
import Cards from '../Cards/Cards'
import H1 from '../ui/headers/H1/H1'
import FormValidate from '../FormValidate/FormValidate'
import ValidationResult from '../ValidationResult/ValidationResult'

import styles from './CreditCardValidator.module.css'

export default class CreditCardValidatorUI {
  #cards

  constructor(cards) {
    this.#cards = cards
  }

  get app() {
    const app = new Div({ classes: styles.app }).element
    const header = new H1({ classes: styles.h1, title: 'Credit Card Validator' }).element
    const cards = new Cards(this.#cards).element
    const formValidate = new FormValidate().element
    const result = new ValidationResult().element
    app.append(header, cards, formValidate, result)

    return app
  }

  showResultValidation(element, result) {
    result && element.classList.add(styles.valid)
    !result && element.classList.add(styles.invalid)
  }

  resetResultValidation(element) {
    element.classList.remove(styles.valid, styles.invalid)
  }

  showSystem(element) {
    element.classList.remove(styles.cardBlur)
  }

  blurSystems(element) {
    element.classList.add(styles.cardBlur)
  }
}
