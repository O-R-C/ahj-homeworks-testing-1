import Div from '../ui/Div/Div'

import styles from './ValidationResult.module.css'

export default class ValidationResult {
  /**
   * @returns элемент
   */
  get element() {
    return this.#createElement()
  }

  #createElement() {
    const result = new Div({ classes: styles.result }).element

    return result
  }
}
