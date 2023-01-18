import React, { useState } from 'react';
import style from './Card.module.sass';
import cat from '../../img/cat.webp';
import cn from 'classnames';

export const Card = ({
                       altText,
                       flavor,
                       isDisabled,
                       portion,
                       packageWeight,
                       present,
                     }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [buy, setBuy] = useState(true);
  const [catConsent, setCatConsent] = useState(true);

  const handleClick = () => {
    setIsSelected(!isSelected);
    setBuy(!buy);
    setIsHover(false);
    if (isDisabled) {
      setIsSelected(false);
    } else if (!buy) {
      setCatConsent(true);
    }
  };
  const onMouseLeave = () => {
    if (isDisabled) {
      setCatConsent(true);
    } else if (!buy) {
      setCatConsent(false);
    }
    setIsHover(false);
  };
  const onMouseEnter = () => {
    if (isDisabled) {
      setIsHover(false);
    } else if (!isSelected) {
      setIsHover(true);
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        className={style.card}>
        <div className={style.card__header}>
          <div className={cn(style.card__grad, {
            [style.isSelected]: isSelected,
            [style.isDisabled]: isDisabled,
          })}>
          </div>
          <div className={cn(style.card__memo, {
            [style.isSelected]: isSelected,
            [style.isDisabled]: isDisabled,
          })}>
            {catConsent
              ? 'Сказочное заморское яство'
              : <span>Котэ не одобряет?</span>
            }
          </div>
        </div>
        <div className={cn(style.card__mainText, {
          [style.isSelected]: isSelected,
          [style.isDisabled]: isDisabled,
        })}>
          <div className={style.card__title}>
            <span>Нямушка</span>
          </div>
          <div className={style.card__subTitle}>
            <span>{flavor}</span>
          </div>
          <div className={style.card__text}>
            <ul>
              <li>{portion}</li>
              <li>{present}</li>
            </ul>
          </div>
          <img className={style.card__img} src={cat} alt="img"/>
          <div className={cn(style.card__circle, {
            [style.isSelected]: isSelected,
            [style.isDisabled]: isDisabled,
            [style.isHover]: isHover,
          })}>
            <span className={style.card__weight}>{packageWeight}</span>
            <span className={style.card__kg}>кг</span>
          </div>
        </div>
      </div>
      <div className={style.card__signature}>
        {
          (isDisabled &&
            <span className={style.disabledCard}>{`Печалька ${flavor} закончился.`}</span>)
          ||
          (buy &&
            <>
              <span>Чего сидишь? Порадуй котэ, </span>
              <span onClick={handleClick} className={style.buy}>купи.</span>
            </>)
          ||
          <span>{altText}</span>
        }
      </div>
    </div>
  );
};