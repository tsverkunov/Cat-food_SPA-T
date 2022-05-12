import React, {useState} from 'react'
import style from './Card.module.sass'
import cat from '../../img/cat.png'
import cn from 'classnames'


export const Card = (props) => {
  const [isSelected, setIsSelected] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [buy, setBuy] = useState(true)
  const [catConsent, setCatConsent] = useState(true)

  const handleClick = () => {
    setIsSelected(!isSelected)
    setBuy(!buy)
    setIsHover(false)
    if (props.isDisabled) {
      setIsSelected(false)
    } else if (!buy) {
      setCatConsent(true)
    }
  }
  const onMouseLeave = () => {
    if (props.isDisabled) {
      setCatConsent(true)
    } else if (!buy) {
      setCatConsent(false)
    }
    setIsHover(false)
  }
  const onMouseEnter = () => {
    if (props.isDisabled) {
      setIsHover(false)
    } else if (!isSelected) {
      setIsHover(true)
    }
  }

  return (
    <div>
      <div
        onClick={handleClick}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        className={style.card}>
        <div className={style.header}>
          <div className={cn(style.grad, {[style.isSelected]: isSelected, [style.isDisabled]: props.isDisabled})}>
          </div>
          <div className={cn(style.memo, {[style.isSelected]: isSelected, [style.isDisabled]: props.isDisabled})}>
            {catConsent
              ? 'Сказочное заморское яство'
              : <span>Котэ не одобряет?</span>
            }
          </div>
        </div>
        <div className={cn(style.mainText, {[style.isSelected]: isSelected, [style.isDisabled]: props.isDisabled})}>
          <div className={style.title}>
            <span>Нямушка</span>
          </div>
          <div className={style.subTitle}>
            <span>{props.flavor}</span>
          </div>
          <div className={style.text}>
            <ul>
              <li>{props.portion}</li>
              <li>{props.present}</li>
            </ul>
          </div>
          <div className={style.img}>
            <img src={cat} alt="img"/>
          </div>
          <div className={cn(style.circle, {
            [style.isSelected]: isSelected,
            [style.isDisabled]: props.isDisabled,
            [style.isHover]: isHover
          })}>
            <span className={style.weight}>{props.packageWeight}</span>
            <span className={style.kg}>кг</span>
          </div>
        </div>
      </div>
      <div className={style.sign}>
        {
          (props.isDisabled &&
            <span className={style.disabledCard}>{`Печалька ${props.flavor} закончился.`}</span>)
          ||
          (buy &&
            <>
              <span>Чего сидишь? Порадуй котэ, </span>
              <span onClick={handleClick} className={style.buy}>купи.</span>
            </>)
          ||
          <span>{props.altText}</span>
        }
      </div>
    </div>
  )
}