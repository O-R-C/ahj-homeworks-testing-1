import Div from '../ui/Div/Div'
import Card from '../Card/Card'

import styles from './Cards.module.css'

export default class Cards {
  #cards = ['Visa', 'MasterCard', 'DinersClub', 'AmericanExpress', 'Discover', 'Mir']

  /**
   * @returns элемент
   */
  get element() {
    return this.#createElement()
  }

  #createElement() {
    const cards = new Div({ classes: styles.cards }).element

    this.#cards.forEach((card) => {
      cards.append(new Card(styles[card]).element)
    })

    return cards
  }
}
