import React from "react";
import {Card} from "./components/Card/Card";
import style from './App.module.sass'

function App() {

  const cards = [
    {
      id: 1,
      isDisabled: false,
      flavor: "с фуа-гра",
      portion: "10 порций",
      present: "мышь в подарок",
      packageWeight: "0,5",
      altText: "Печень утки разварная с артишоками."
    },
    {
      id: 2,
      isDisabled: false,
      flavor: "с рыбой",
      portion: "40 порций",
      present: "2 мыши в подарок",
      packageWeight: "2",
      altText: "Головы щучьи с чесноком да свежайшая сёмгушка."
    },
    {
      id: 3,
      isDisabled: true,
      flavor: "с курой",
      portion: "100 порций",
      present: "5 мышей в подарок заказчик доволен",
      packageWeight: "5",
      altText: "Филе из цыплят с трюфелями в бульоне."
    }
  ]

  return (
    <div className={style.page}>
      <div className={style.page__header}>
        Ты сегодня покормил кота?
      </div>
      <div className={style.cards}>
        {
          cards.map(c =>
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
  );
}

export default App;
