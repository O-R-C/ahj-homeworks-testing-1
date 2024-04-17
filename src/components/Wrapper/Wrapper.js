import Div from '../ui/Div/Div'
import styles from './Wrapper.module.css'

export default class Wrapper {
  #element

  /**
   *
   * @param {Element} element
   */
  constructor(element) {
    this.#element = element
  }

  /**
   * @returns элемент
   */
  get element() {
    return this.#createElement()
  }

  #createElement() {
    const wrapper = new Div({ classes: styles.wrapper })
    wrapper.append(this.#element)

    return wrapper
  }
}
