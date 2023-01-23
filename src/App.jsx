import React from 'react'
import {Card} from './components/Card/Card'
import style from './App.module.sass'
import {initialCards} from './utils/cards'

function App() {
  return (
    <div className={style.page}>
      <span className={style.page__title}>
        Ты сегодня покормил кота?
      </span>
      <section className={style.cards}>
        {
          initialCards.map(card =>
            <Card
              key={card.id}
              isDisabled={card.isDisabled}
              flavor={card.flavor}
              portion={card.portion}
              present={card.present}
              packageWeight={card.packageWeight}
              altText={card.altText}
            />)
        }
      </section>
    </div>
  )
}

export default App
