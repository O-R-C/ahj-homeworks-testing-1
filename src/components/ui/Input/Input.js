import styles from './Input.module.css'

export default class Input {
  #params

  /**
   * @typedef {object} element
   * @property {String|String[]} classes
   * @property {String} type
   * @property {boolean} required
   */

  /**
   * @param {element} element
   * {
   * classes = [styles.input],
   * id = '',
   * type = 'text',
   * required = true,
   * placeholder = '...'
   * }
   */
  constructor(element) {
    this.#params = {
      ...this.#getDefaultParams(),
      ...element,
    }
  }

  #getDefaultParams() {
    return { classes: [], id: '', type: 'text', required: true, placeholder: '...' }
  }

  #getClasses(classes) {
    const classesArray = Array.isArray(classes) ? classes : [classes]
    const filteredClasses = classesArray.filter((className) => className)

    return filteredClasses.length ? filteredClasses : [styles.input]
  }

  get element() {
    return this.#createElement()
  }

  #createElement() {
    const input = document.createElement('input')

    input.id = this.#params.id
    input.type = this.#params.type
    input.required = this.#params.required
    input.placeholder = this.#params.placeholder
    input.classList.add(...this.#getClasses(this.#params.classes))

    return input
  }
}
