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
    const form = new Form({ classes: styles.form }).element
    const input = new Input({ classes: styles.input, placeholder: 'Credit card number' })
      .element
    const button = new Button({ title: 'Click to Validate' }).element

    form.append(input, button)

    return form
  }
}
