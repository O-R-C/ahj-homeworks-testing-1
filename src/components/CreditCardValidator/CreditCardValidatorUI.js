import Input from '../ui/Input/Input'
import Button from '../ui/Button/Button'

export default class CreditCardValidatorUI {
  app = CreditCardValidatorUI.getElement('app')

  /**
   * Создает и возвращает элемент нужного типа и класса
   * @param {string|string[]} className имя || массив имен класса
   * @param {string} [type=div] тэг создаваемого элемента
   * @returns элемент
   */
  static getElement(className, type = 'div') {
    const element = document.createElement(type)

    Array.isArray(className)
      ? element.classList.add(...className)
      : element.classList.add(className)

    return element
  }

  static get app() {
    const app = CreditCardValidatorUI.getElement('app')
    const cards = CreditCardValidatorUI.getElement('cards')
    const controls = CreditCardValidatorUI.getElement('controls')
    const input = new Input({ classes: '' }).element
    const button = new Button({ title: 'Click to Validate' }).element
    controls.append(input, button)
    app.append(cards, controls)

    return app
  }
}
