import Div from '../ui/Div/Div'

import styles from './Card.module.css'

export default class Card {
  #classes

  /**
   *
   * @param {String|String[]} classes
   */
  constructor(classes) {
    this.#classes = classes
  }

  /**
   * @returns элемент
   */
  get element() {
    return this.#createElement()
  }

  #createElement() {
    const card = new Div({ classes: this.#getClasses(this.#classes) }).element

    card.append()

    return card
  }

  #getClasses(classes) {
    const classesArray = Array.isArray(classes) ? classes : [classes]

    return classesArray.reduce(
      (acc, className) => {
        if (className) return [...acc, className]
        return acc
      },
      [styles.card]
    )
  }
}
