import styles from './H1.module.css'

export default class H1 {
  #params

  /**
   * @typedef {object} element
   * @property {String|String[]} classes
   * @property {String} id
   * @property {String} title
   */

  /**
   * @param {element} element
   * {
   * classes = [styles.h1],
   * id = '',
   * title = 'Header 1',
   * }
   */
  constructor(element) {
    this.#params = {
      ...this.#getDefaultParams(),
      ...element,
    }
  }

  #getDefaultParams() {
    return { classes: [], id: '', title: 'Header 1' }
  }

  #getClasses(classes) {
    const classesArray = Array.isArray(classes) ? classes : [classes]

    return classesArray.reduce(
      (acc, className) => {
        if (className) return [...acc, className]
        return acc
      },
      [styles.h1]
    )
  }

  /**
   * @returns элемент
   */
  get element() {
    return this.#createElement()
  }

  #createElement() {
    const element = document.createElement('h1')

    element.textContent = this.#params.title
    element.classList.add(...this.#getClasses(this.#params.classes))

    this.#params.id && (element.id = this.#params.id)

    return element
  }
}
