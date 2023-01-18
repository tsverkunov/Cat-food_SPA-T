import React from 'react'
import {Card} from './components/Card/Card'
import style from './App.module.sass'
import {initialCards} from './utils/cards'

function App() {
  return (
    <div className={style.page}>
      <header className={style.page__header}>
        Ты сегодня покормил кота?
      </header>
      <div className={style.cards}>
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
      </div>
    </div>
  )
}

export default App
