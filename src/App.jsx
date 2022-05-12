import React from 'react'
import {Card} from './components/Card/Card'
import style from './App.module.sass'
import {initialCards} from './utils/cards'

function App() {
  return (
    <div className={style.page}>
      <div className={style.page__header}>
        Ты сегодня покормил кота?np
      </div>
      <div className={style.cards}>
        {
          initialCards.map(c =>
            <Card
              key={c.id}
              isDisabled={c.isDisabled}
              flavor={c.flavor}
              portion={c.portion}
              present={c.present}
              packageWeight={c.packageWeight}
              altText={c.altText}
            />)
        }
      </div>
    </div>
  )
}

export default App
