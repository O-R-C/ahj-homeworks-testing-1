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
    // const controls = new Div({ classes: 'controls' }).element
    // controls.append(formValidate)
    app.append(header, cards, formValidate, result)

    return app
  }
}
