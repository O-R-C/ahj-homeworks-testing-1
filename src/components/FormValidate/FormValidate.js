import Form from '../ui/Form/Form'
import Input from '../ui/Input/Input'
import Button from '../ui/Button/Button'

import styles from './FormValidate.module.css'

export default class FormValidate {
  /**
   * @returns элемент
   */
  get element() {
    return this.#createElement()
  }

  #createElement() {
    const form = new Form({ classes: styles.formValidate }).element

    const input = new Input({
      classes: styles.input,
      name: 'cardNumber',
      placeholder: 'Credit card number',
    }).element

    const buttonValidate = new Button({
      classes: styles.btnValidate,
      type: 'submit',
      title: 'Click to Validate',
    }).element

    const buttonReset = new Button({
      classes: styles.btnReset,
      type: 'reset',
      title: 'X',
    }).element

    form.append(input, buttonValidate, buttonReset)

    return form
  }
}
